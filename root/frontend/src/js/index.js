import "../styles/main.scss";
const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const accordionBtn = e.target.closest(".accordion-btn");
  if (accordionBtn) {
    const accordionList = accordionBtn.nextElementSibling;
    if (
      accordionList.style.maxHeight === "0px" ||
      !accordionList.style.maxHeight
    ) {
      accordionList.style.maxHeight = "500px";
      accordionList.style.opacity = "2";
      accordionList.style.marginBottom = "1rem";
      return;
    }
    accordionList.style.maxHeight = "0px";
    accordionList.style.opacity = "0";
    accordionList.style.marginBottom = "0rem";
  }
});
/**
 *
 */
const carousel = document.querySelector(".carousel");

const carouselBtnContainer = document.querySelector(".carousel-btn-container");
let currentSlide = 0;
carouselBtnContainer.addEventListener("click", function (e) {
  if (e.target.closest(".carousel-btn")) {
    const slide = carousel.querySelectorAll(".slide");
    if (e.target.closest(".carousel-btn--right")) {
      if (currentSlide === slide.length - 1) currentSlide = 0;
      else currentSlide++;
    }
    if (e.target.closest(".carousel-btn--left")) {
      if (currentSlide === 0) currentSlide = slide.length - 1;
      else currentSlide--;
    }
    slide[currentSlide].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }
});
