function change_content(title, description, video) {
    var current_title = document.getElementById("video__header");
    var current_description = document.getElementById("video__description");
    var current_video = document.getElementById("video__playing");
    if (current_title.innerHTML === title) {
      return;
    }
    else {
        current_title.innerHTML = title;
        current_description.innerHTML = description;
        current_video.src = "demo_videos/" + video;
    }
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



