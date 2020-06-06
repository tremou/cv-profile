const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

console.log(navbar);
console.log(menu);

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    navbar.classList.remove('navbar');
    navbar.classList.add("navbar-under");
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 700) {
    navbar.classList.remove("navbar-under");
    navbar.classList.add('navbar');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    menu.classList.remove('menu');
    menu.classList.add("menu-under");
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 700) {
    menu.classList.remove("menu-under");
    menu.classList.add('menu');
  }
});

console.log(navbar);
console.log(menu);
