var menuButton = document.querySelector(".header__toggle");
var mainNav = document.querySelector(".main-nav");
var siteNav = document.querySelector(".site-nav");

var closeMenu = function () {
  menuButton.classList.remove("js-header__toggle--open");
  menuButton.classList.add("js-header__toggle--close");
  mainNav.classList.remove("js-hidden");
  mainNav.classList.add("js-show");
  siteNav.classList.remove("js-hidden");
  siteNav.classList.add("js-show");
}

var openMenu = function () {
  menuButton.classList.remove("js-header__toggle--close");
  menuButton.classList.add("js-header__toggle--open");
  mainNav.classList.remove("js-show");
  mainNav.classList.add("js-hidden");
  siteNav.classList.remove("js-show");
  siteNav.classList.add("js-hidden");
}

menuButton.classList.add("js-show");
menuButton.classList.add("js-header__toggle--open");
mainNav.classList.add("js-hidden");
siteNav.classList.add("js-hidden");

menuButton.addEventListener("click", function (){
  var menuIsOpen = menuButton.classList.contains("js-header__toggle--open");
  menuIsOpen ?  closeMenu() : openMenu();
});

var indexBusket = document.querySelector(".week-product__button");
var busketModal = document.querySelector(".busket-modal");
var busketWrapper = document.querySelector(".busket-modal__wrapper");

indexBusket.addEventListener("click", function(event) {
  event.preventDefault();
  busketModal.classList.remove("js-hidden");
  busketWrapper.classList.remove("js-hidden");
  busketModal.classList.add("js-show");
  busketWrapper.classList.add("js-show");
});

busketWrapper.addEventListener("click", function(event) {
  event.preventDefault();
  busketModal.classList.remove("js-show");
  busketWrapper.classList.remove("js-show");
  busketModal.classList.add("js-hidden");
  busketWrapper.classList.add("js-hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (busketModal.classList.contains("js-show") && busketModal.classList.contains("js-show")) {
      busketModal.classList.remove("js-show");
      busketWrapper.classList.remove("js-show");
      busketModal.classList.add("js-hidden");
      busketWrapper.classList.add("js-hidden");
    }
  }
});
