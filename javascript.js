// for larger devices

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

const target = document.querySelector('.banner');

const options = {};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting === false) {
      navbar.classList.remove('navbar');
      navbar.classList.add("navbar-under");
      menu.classList.remove("menu");
      menu.classList.add('menu-under');
    } else {
      navbar.classList.remove('navbar-under');
      navbar.classList.add("navbar");
      menu.classList.remove("menu-under");
      menu.classList.add('menu');
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(target);



// for iphone and small devices

const menuIphone = document.querySelector(".banner");
const navbarIphone = document.querySelector(".menu-iphone-under");

const optionsPhone = {
  threshold: 0,
  rootMargin: "-20px",
};

const callbackPhone = (entriesPhone, observerPhone) => {
  entriesPhone.forEach(entry => {
    if (entry.isIntersecting === false) {
      console.log(entriesPhone);
      navbarIphone.classList.remove("menu-iphone-under");
      navbarIphone.classList.add('menu-iphone-under-after');
    } else {
      console.log(entriesPhone);
      navbarIphone.classList.remove("menu-iphone-under-after");
      navbarIphone.classList.add("menu-iphone-under");
    }
  });
};

const observerPhone = new IntersectionObserver(callbackPhone, optionsPhone);

observerPhone.observe(menuIphone);
