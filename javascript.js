const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


window.addEventListener('scroll', () => {
  if (window.scrollY > 730) {
    navbar.classList.remove('navbar');
    navbar.classList.add("navbar-under");
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 730) {
    navbar.classList.remove("navbar-under");
    navbar.classList.add('navbar');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 730) {
    menu.classList.remove('menu');
    menu.classList.add("menu-under");
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 730) {
    menu.classList.remove("menu-under");
    menu.classList.add('menu');
  }
});

if (vw < 1300) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 630) {
      navbar.classList.remove('navbar');
      navbar.classList.add("navbar-under");
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY < 630) {
      navbar.classList.remove("navbar-under");
      navbar.classList.add('navbar');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 630) {
      menu.classList.remove('menu');
      menu.classList.add("menu-under");
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY < 630) {
      menu.classList.remove("menu-under");
      menu.classList.add('menu');
    }
  });
}


if (vw < 1150) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 470) {
      navbar.classList.remove('navbar');
      navbar.classList.add("navbar-under");
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY < 470) {
      navbar.classList.remove("navbar-under");
      navbar.classList.add('navbar');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 470) {
      menu.classList.remove('menu');
      menu.classList.add("menu-under");
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY < 470) {
      menu.classList.remove("menu-under");
      menu.classList.add('menu');
    }
  });
}

if (vw < 900) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 390) {
      navbar.classList.remove('navbar');
      navbar.classList.add("navbar-under");
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY < 390) {
      navbar.classList.remove("navbar-under");
      navbar.classList.add('navbar');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 390) {
      menu.classList.remove('menu');
      menu.classList.add("menu-under");
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY < 390) {
      menu.classList.remove("menu-under");
      menu.classList.add('menu');
    }
  });
}


const test = () => { console.log('hello') };

let options = {
  root: document.querySelector('.banner'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(test, options);

let target = document.querySelector('.menu-iphone');
observer.observe(target);
