const meteoData = "src/data/data.json";
const containerWeather = document.querySelector(".weather-info");
const containerDetailed = document.querySelector(".weather-details__list");

async function getMeteoData() {
  const response = await fetch(meteoData);
  if (!response.ok) {
    throw new Error('Проблема при получении данных:', response.status);
  } 
  return response.json()
}

getMeteoData()
  .then(response => {
    let fragment = document.createDocumentFragment();

    function insertUser(userInfo) {
      let address = document.createElement("address");
      address.className = "weather-info__user-location";
      address.innerHTML = `
        <span class="user-location-town">${userInfo.town}</span>
        <time datetime="${userInfo.date}">${userInfo.date}</time>
        <time datetime="${userInfo.time}">${userInfo.time}</time>
      `;
      fragment.appendChild(address);
    }
    insertUser(response[0].user);

    function insertWeatherInfo(weatherInfo) {
      let spanElement = document.createElement("span");
      let divElement = document.createElement("div");
      spanElement.className = "weather-info__degrees";
      spanElement.innerText = `${weatherInfo.temperature}${weatherInfo.unit}`;
      divElement.className = "weather-info__weather";
      divElement.innerHTML = `
        <div class="weather-type">
           <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <use href="${weatherInfo.condition.src}"></use>
          </svg>
          <span>${weatherInfo.condition.caption}</span>
        </div>
        <span class="weather-feel-temp">Ощущается как ${weatherInfo.condition.feelTemp}${weatherInfo.unit}</span>
      `;
      fragment.appendChild(spanElement);
      fragment.appendChild(divElement);
    }
    insertWeatherInfo(response[1].weather);
    containerWeather.appendChild(fragment);

    fragment = document.createDocumentFragment();
    function insertDetailedInfo(detailedInfo) {
      detailedInfo.forEach((dataItem) => {
        let descriptionFragment = "";
        if (dataItem.description.includes("~@~")) {
          descriptionFragment = dataItem.description.split("~@~").map(item => `<span>${item}</span>`).join("");
        } else {
          descriptionFragment = dataItem.description;
        };

        let meteobarFragment = "";
        if (dataItem.meteobar) {
          meteobarFragment = `
            <input
              class="item-meteobar__bar item-meteobar__bar--${dataItem.meteobar.type}"
              type="range"
              min="${dataItem.meteobar.min}"
              max="${dataItem.meteobar.max}"
              value="${dataItem.meteobar.value}"
              disabled
              style="--center-circle: ${dataItem.meteobar.value};"
            >
          `;
        }

        const card = document.createElement('li');
        card.innerHTML = `
          <div class="weather-details__list-item">
            <h2 class="item-title">${dataItem.title}</h2>
            <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
              <use href="public/icons/general.svg#${dataItem.src}"></use>
            </svg>
            <output
              class="item-value"
              role="status"
              name="mateobar-value"
            >${dataItem.value}</output>
            <div class="item-meteobar">
              ${meteobarFragment}
              <span class="item-meteobar__description">${descriptionFragment}</span>
            </div>
          </div>
        `;
        fragment.appendChild(card);
      })
    }
    insertDetailedInfo(response[2].detailed);
    containerDetailed.innerHTML = "";
    containerDetailed.appendChild(fragment);
  })
  .catch(err => console.log('Ошибка при обработке данных:', err))