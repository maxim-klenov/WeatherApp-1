import { weather24, weatherTypes, unit, weather5 } from "../data/data.js";

function sliderData(castType) {
  const getTypeOfWeather = (method, compareTo, methodToReturn) => weatherTypes.find(item => item[method] === compareTo)[methodToReturn];

  const data = castType === "24-hours" ? weather24 : castType === "5-days" ? weather5 : null;

  const fragment = document.createDocumentFragment();

  data.forEach(({ time, "weather-type": weatherType, "time-period": timePeriod, temperature, tempFrom, tempTo }) => {
    const listElement = document.createElement("li");
    listElement.className = "slider__list-item";
    listElement.innerHTML = `
      <div class="item-inner">
        <time datetime="${time}">${time}</time>
        <svg role="img" viewBox="0 0 32 32" width="32" height="32" aria-label="${weatherType}">
          <use href="public/icons/${timePeriod}-sprite.svg#${getTypeOfWeather("eng", weatherType, timePeriod)}"></use>
        </svg>
        <span>${castType === "24-hours" ? `${temperature}${unit}` : `от ${tempFrom}${unit} до ${tempTo}${unit}`}</span>
      </div>
    `;
    fragment.appendChild(listElement);
  });

  return fragment;
}

export default sliderData;
