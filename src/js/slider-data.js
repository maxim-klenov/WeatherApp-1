import { weather24, weatherTypes, unit, weather5 } from "../data/data.js";

const mapping = {
  "24-hours": weather24,
  "5-days": weather5
};

function getTypeOfWeather(method, compareTo, methodToReturn) {
  const foundItem = weatherTypes.find(item => item[method] === compareTo);
  if (foundItem) {
    return foundItem[methodToReturn];
  }
  return null;
}

/**
 * Возвращает нужные данные слайдера, в зависимости от типа прогноза.
 * 
 * @param {string} castType - Тип прогноза 
 * Ограничение: должно соответсвовать одному из ключей объекта mapping 
 * 
 * @returns {DocumentFragment} HTML-фрагмент с элементами списка
 */


function sliderData(castType) {
  const data = mapping[castType] || null;
  const fragment = document.createDocumentFragment();

  data.forEach(item => {
    const time = item.time;
    const weatherType = item["weather-type"];
    const timePeriod = item["time-period"];
    const temperature = item.temperature;
    const tempFrom = item.tempFrom;
    const tempTo = item.tempTo;

    const listElement = document.createElement("li");
    listElement.className = "slider__list-item";

    // Получаем нужные значения из weatherTypes и сохр. в переменные
    const iconId = getTypeOfWeather("eng", weatherType, timePeriod);
    const iconDescription = getTypeOfWeather("eng", weatherType, "type");

    // Формируем строку с температурой в зависимости от типа прогноза
    let temperatureText;
    if (castType === "24-hours") {
      temperatureText = typeof temperature !== "undefined" ? `${temperature}${unit}` : "";
    } else if (castType === "5-days") {
      temperatureText = (typeof tempFrom !== "undefined" && typeof tempTo !== "undefined") 
        ? `от ${tempFrom}${unit} до ${tempTo}${unit}` 
        : "";
    } else {
      temperatureText = "";
    }

    // Формируем внутренний HTML
    listElement.innerHTML = `
      <div class="item-inner">
        <time datetime="${time || ""}">${time || ""}</time>
        <img src="public/icons/${timePeriod}/${iconId}.svg" alt="${iconDescription}" width="32" height="32">
        <span>${temperatureText}</span>
      </div>
    `;

    // listElement.appendChild(icon)

    fragment.appendChild(listElement);
  });


  return fragment;
}

export default sliderData;
