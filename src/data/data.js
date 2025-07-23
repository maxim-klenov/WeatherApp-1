const unit = "°";

const weatherTypes = [
  { type: "Солнечно", eng: "clear sky", night: "01n", day: "01d" },
  { type: "Облачно с прояснениями", eng: "few clouds", night: "02n", day: "02d" },
  { type: "Переменная облачность", eng: "scattered clouds", night: "03n", day: "03d" },
  { type: "облачно", eng: "broken clouds", night: "04n", day: "04d" },
  { type: "Ливень", eng: "shower rain", night: "09n", day: "09d" },
  { type: "Дождь", eng: "rain", night: "10n", day: "10d" },
  { type: "Гроза", eng: "thunderstorm", night: "11n", day: "11d" },
  { type: "Снег", eng: "snow", night: "13n", day: "13d" },
  { type: "Туман", eng: "mist", night: "50n", day: "50d" },
];

const weatherData = [
  {
    "town": "Кременчуг-константиновское",
    "date": "Суббота, 06 января",
    "time": "11:29"
  },
  {
    "temperature": -7,
    "condition": {
      "src": "public/icons/general.svg#cloud",
      "caption": "Облачно с прояснениями",
      "feelTemp": -11
    }
  },
  [
    {
      "title": "Влажность",
      "src": "humidity",
      "value": "75 %",
      "meteobar": {
        "type": "progress",
        "min": "0",
        "max": "100",
        "value": "60"
      },
      "description": "0%~@~100%"
    },
    {
      "title": "Давление",
      "src": "barometr",
      "value": "761",
      "meteobar": {
        "type": "pressure",
        "min": "0",
        "max": "100",
        "value": "76"
      },
      "description": "Повышенное"
    },
    {
      "title": "Видимость",
      "src": "visibility",
      "value": "28 км",
      "meteobar": {
        "type": "progress",
        "min": "0",
        "max": "100",
        "value": "20"
      },
      "description": "Нормальная"
    },
    {
      "title": "Рассвет",
      "src": "sunrise",
      "value": "8:42",
      "meteobar": null,
      "description": "Прошло: 02:47"
    },
    {
      "title": "Закат",
      "src": "sunset",
      "value": "16:37",
      "meteobar": null,
      "description": "Осталось: 05:08"
    },
    {
      "title": "Сила ветра",
      "src": "direction-northwest",
      "value": "2 м/с",
      "meteobar": null,
      "description": "Северо-западный"
    }
  ]
];

const weather24 = [
  {
    "time": "12:00",
    "time-period": "day",
    "weather-type": "broken clouds",
    "temperature": -7
  },
  {
    "time": "15:00",
    "time-period": "day",
    "weather-type": "broken clouds",
    "temperature": -5
  },
  {
    "time": "18:00",
    "time-period": "day",
    "weather-type": "broken clouds",
    "temperature": -7
  },
  {
    "time": "21:00",
    "time-period": "day",
    "weather-type": "broken clouds",
    "temperature": -9
  },
  {
    "time": "00:00",
    "time-period": "day",
    "weather-type": "broken clouds",
    "temperature": -11
  },
  {
    "time": "03:00",
    "time-period": "day",
    "weather-type": "broken clouds",
    "temperature": -13
  },
  {
    "time": "06:00",
    "time-period": "day",
    "weather-type": "broken clouds",
    "temperature": -15
  },
  {
    "time": "09:00",
    "time-period": "day",
    "weather-type": "broken clouds",
    "temperature": -17
  },
];

const weather5 = [
  {
    "time": "Вс, 07 янв.",
    "time-period": "day",
    "weather-type": "few clouds",
    "tempFrom": -17,
    "tempTo": -11,
  },
  {
    "time": "Пн, 08 янв.",
    "time-period": "day",
    "weather-type": "few clouds",
    "tempFrom": -16,
    "tempTo": -8,
  },
  {
    "time": "Вт, 09 янв.",
    "time-period": "day",
    "weather-type": "broken clouds",
    "tempFrom": -8,
    "tempTo": -2,
  },
  {
    "time": "Ср, 10 янв.",
    "time-period": "day",
    "weather-type": "broken clouds",
    "tempFrom": -2,
    "tempTo": 1,
  },
  {
    "time": "Чт, 11 янв.",
    "time-period": "day",
    "weather-type": "broken clouds",
    "tempFrom": -2,
    "tempTo": 1,
  },
]

export { unit, weatherTypes, weatherData, weather24, weather5 };