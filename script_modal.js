'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtns = document.querySelectorAll(".show-modal");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

openModalBtns.forEach(btn => {
    btn.addEventListener("click", openModal);
});

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//Closing modal with ESC key-press:
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
   } 
});