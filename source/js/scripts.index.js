var openModal = document.querySelectorAll(".button--js");
var basketModal = document.querySelector(".basket-modal");
var basketWrapper = document.querySelector(".basket-modal-wrapper");

openModal.forEach(function(openModal) {
  openModal.addEventListener("click", function(event) {
    event.preventDefault();
    basketModal.classList.remove("basket-modal__hidden");
    basketWrapper.classList.remove("basket-modal-wrapper__hidden");
    basketModal.classList.add("basket-modal__show");
    basketWrapper.classList.add("basket-modal-wrapper__show");
  });
});

basketWrapper.addEventListener("click", function(event) {
  event.preventDefault();
  basketModal.classList.remove("basket-modal__show");
  basketWrapper.classList.remove("basket-modal-wrapper__show");
  basketModal.classList.add("basket-modal__hidden");
  basketWrapper.classList.add("basket-modal-wrapper__hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (basketModal.classList.contains("basket-modal__show") && basketModal.classList.contains("basket-modal__show")) {
      basketModal.classList.remove("basket-modal__show");
      basketWrapper.classList.remove("basket-modal-wrapper__show");
      basketModal.classList.add("basket-modal__hidden");
      basketWrapper.classList.add("basket-modal-wrapper__hidden");
    }
  }
});
