import { apiKey } from "./constants";
import { getWeatherByCoord } from "./getWeatherByCoord";
import { loading } from "./loading";
import { renderCitiesBtn } from "./renderCitiesBtn";
import { renderCity } from "./renderCity"

export const getCityCoord = async (city) => {
  try {
    loading()
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    const data = await res.json();
    const store = localStorage.getItem("cities");

    if (store) {
      let cities = JSON.parse(store)
      if (cities.length >= 10) {
        cities = cities.slice(0, 9)
      }
      localStorage.setItem("cities", JSON.stringify([city, ...cities]))
      renderCitiesBtn()
    } else {
      localStorage.setItem("cities", JSON.stringify([city]))
      renderCitiesBtn()
    }

    if (data[0]) {
      let { lat, lon } = data[0]
      const city = await getWeatherByCoord(lat, lon)
      renderCity(city)
    }

  } catch (e) {
    console.error(e);
  }
}