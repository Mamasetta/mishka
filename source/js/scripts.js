var openModal = document.querySelectorAll(".js-open__basket-modal");
var basketModal = document.querySelector(".basket-modal");
var basketWrapper = document.querySelector(".basket-modal__wrapper");

openModal.forEach(function(openModal) {
  openModal.addEventListener("click", function(event) {
    event.preventDefault();
    basketModal.classList.remove("js-hidden");
    basketWrapper.classList.remove("js-hidden");
    basketModal.classList.add("js-show");
    basketWrapper.classList.add("js-show");
  });
});

basketWrapper.addEventListener("click", function(event) {
  event.preventDefault();
  basketModal.classList.remove("js-show");
  basketWrapper.classList.remove("js-show");
  basketModal.classList.add("js-hidden");
  basketWrapper.classList.add("js-hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (basketModal.classList.contains("js-show") && basketModal.classList.contains("js-show")) {
      basketModal.classList.remove("js-show");
      basketWrapper.classList.remove("js-show");
      basketModal.classList.add("js-hidden");
      basketWrapper.classList.add("js-hidden");
    }
  }
});
