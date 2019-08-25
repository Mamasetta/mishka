var menuButton = document.querySelector(".header__toggle");
var openMenu = document.querySelector(".js-header__toggle--open");
var closeMenu = document.querySelector(".js-header__toggle--close");
var mainNav = document.querySelector(".main-nav");
var siteNav = document.querySelector(".site-nav");

menuButton.classList.add("js-show");
menuButton.classList.add("js-header__toggle--open");
mainNav.classList.add("js-hidden");
siteNav.classList.add("js-hidden");

openMenu.addEventListener("click", function(event) {
  event.preventDefault();
  menuButton.classList.remove("js-header__toggle--open");
  menuButton.classList.add("js-header__toggle--close");

  mainNav.classList.remove("js-hidden");
  mainNav.classList.add("js-show");

  siteNav.classList.remove("js-hidden");
  siteNav.classList.add("js-show");
});

closeMenu.addEventListener("click", function(event) {
  event.preventDefault();
  menuButton.classList.remove("js-header__toggle--close");
  menuButton.classList.add("js-header__toggle--open");

  mainNav.classList.remove("js-show");
  mainNav.classList.add("js-hidden");

  siteNav.classList.remove("js-show");
  siteNav.classList.add("js-hidden");
});
