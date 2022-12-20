import { renderCity } from "./renderCity";
import { loading } from "./loading";
import { getWeatherByCoord } from "./getWeatherByCoord"

export function initWeather(position) {
  loading()
  getWeatherByCoord(position.coords.latitude, position.coords.longitude)
    .then((res) => renderCity(res))
} 