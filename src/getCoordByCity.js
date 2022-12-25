import { getWeatherByCoord } from "./getWeatherByCoord";
import { loading } from "./loading";
import { renderCity } from "./renderCity";
import { saveHistory } from "./saveHistory"
import axios from "axios";


export const getCoordByCity = async (city, el, apiKey) => {
  try {
    loading(el)
    const { data } = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    saveHistory(city, el)

    if (data[0]) {
      let { lat, lon } = data[0]
      const city = await getWeatherByCoord(lat, lon, el, apiKey)
      renderCity(city, el)
    }

    return data[0]
  } catch (e) {
    console.error(e);
  }
}