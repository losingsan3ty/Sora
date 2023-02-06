import "../styles/main.scss";
const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const accordionBtn = e.target.closest(".accordion-btn");
  if (accordionBtn) {
    accordionBtn.nextElementSibling.classList.toggle("hidden");
  }
});
