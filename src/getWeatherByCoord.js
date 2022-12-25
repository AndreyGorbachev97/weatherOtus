import axios from "axios";
import { renderMap } from "./map";

export const getWeatherByCoord = async (lat, lon, el, apiKey) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=RU&appid=${apiKey}`
    );
    if (data.cod !== 200) throw new Error(data.message);
    const map = el.querySelector("#map");
    map.innerHTML = "";
    renderMap([lat, lon]);
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
