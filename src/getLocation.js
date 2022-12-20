import { initWeather } from "./initWeather"

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initWeather);
  } else {
    x.innerHTML = "Браузер не поддерживает геолокацию.";
  }
}