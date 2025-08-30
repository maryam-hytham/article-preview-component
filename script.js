const shareBtn = document.querySelector(".share-btn");
const overlayBtn = document.querySelector(".overlay-btn");
const overlay = document.querySelector(".overlay");

document.addEventListener("DOMContentLoaded", () => {
  const shareBtns = document.querySelectorAll(".share-btn");
  const overlay = document.querySelector(".overlay");

  shareBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      overlay.classList.toggle("active");
      if (window.innerWidth >= 768) {
        btn.classList.toggle("share-btn-active");
      } else {
        overlayBtn.classList.toggle("overlay-btn-active");
      }
    });
  });
});
