function scroll_to(section) {
  var destination = document.querySelector(section).offsetTop - 85;
  window.scroll({
    top: destination, 
    behavior: "smooth"
  });
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



