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
