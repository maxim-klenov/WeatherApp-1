import sliderData from "./slider-data.js";

const buttonLeft = document.querySelector(".slider__control.control--left");
const buttonRight = document.querySelector(".slider__control.control--right");
const sliderGroup = document.querySelector(".slider__list");
const headingButtonsGroup = document.querySelectorAll(".slider__heading .slider__heading-tab");

sliderGroup.addEventListener("scroll", function () {
  buttonLeft.disabled = this.scrollLeft === 0;
  buttonLeft.ariaDisabled = this.scrollLeft === 0;
  buttonRight.disabled = this.scrollLeft + this.clientWidth >= this.scrollWidth;
  buttonRight.ariaDisabled = this.scrollLeft + this.clientWidth >= this.scrollWidth;
})

function insertData(htmlStructure) {
  sliderGroup.innerHTML = "";
  sliderGroup.appendChild(htmlStructure);
}
insertData(sliderData("24-hours"));

headingButtonsGroup.forEach(clickedButton => {
  clickedButton.addEventListener("click", () => {
    if (clickedButton.id === sliderGroup.id) return;

    sliderGroup.id = clickedButton.id;
    clickedButton.className = "slider__heading-tab active";
    clickedButton.ariaPressed = true;

    if (clickedButton.id === "24-hours") {
      headingButtonsGroup[1].className = "slider__heading-tab";
      headingButtonsGroup[1].removeAttribute("aria-pressed");
      insertData(sliderData("24-hours"));
    } else {
      headingButtonsGroup[0].className = "slider__heading-tab";
      headingButtonsGroup[0].removeAttribute("aria-pressed");
      insertData(sliderData("5-days"));
    }
  })
})