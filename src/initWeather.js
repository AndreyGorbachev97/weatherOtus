import { renderCity } from "./renderCity";
import { loading } from "./loading";
import { getWeatherByCoord } from "./getWeatherByCoord"
import { apiKey } from "./constants"

const body = document.querySelector("body")

export function initWeather(position) {
  loading(body)
  console.log("position11", position)
  getWeatherByCoord(position.coords.latitude, position.coords.longitude, body, apiKey)
    .then((res) => renderCity(res, body))
} 