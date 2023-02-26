import { RenderCity } from "./renderCity";
import { loading } from "./loading";
import { getWeatherByCoord } from "./getWeatherByCoord";
import { apiKey } from "./constants";
import { renderMap } from "./map";

const body = document.querySelector("body");

export function initWeather(position) {
  loading(body);
  renderMap([position.coords.latitude, position.coords.longitude]);
  const container = body.querySelector(".current-city");
  getWeatherByCoord(
    position.coords.latitude,
    position.coords.longitude,
    body,
    apiKey
  ).then((res) => new RenderCity(container, res));
}
