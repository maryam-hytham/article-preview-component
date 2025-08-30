document.addEventListener("DOMContentLoaded", () => {
  const shareBtns = document.querySelectorAll(".share-btn");
  const overlayModal = document.querySelector(".overlay");
  const overlayBtn = document.querySelector(".overlay-btn");

  shareBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      overlayModal.classList.toggle("active");
      if (window.innerWidth >= 768) {
        btn.classList.toggle("share-btn-active");
      } else {
        overlayBtn.classList.toggle("overlay-btn-active");
      }
    });
  });
});
