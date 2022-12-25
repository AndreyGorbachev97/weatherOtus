import axios from "axios";
import { getWeatherByCoord } from "./getWeatherByCoord";
import { loading } from "./loading";
import { renderCity } from "./renderCity";
import { saveHistory } from "./saveHistory";

export const getCoordByCity = async (city, el, apiKey) => {
  try {
    loading(el);
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    );
    saveHistory(city);

    if (data[0]) {
      const { lat, lon } = data[0];
      const wetherForCity = await getWeatherByCoord(lat, lon, el, apiKey);
      renderCity(wetherForCity, el);
    }
    return data[0];
  } catch (e) {
    return e;
  }
};
