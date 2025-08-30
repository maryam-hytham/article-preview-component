// Variables
const buttons = document.querySelectorAll(".share-btn");
const overlay = document.querySelector(".overlay");

// Event Listeners

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    overlay.classList.toggle("active");
  });
});
