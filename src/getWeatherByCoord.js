import { renderMap } from "./map";

export const getWeatherByCoord = async (lat, lon, el, apiKey) => {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=RU&appid=${apiKey}`)
    const data = await res.json();
    console.log("data", data)
    if (data.cod !== 200) throw new Error(data.message)
    const map = el.querySelector("#map")
    map.innerHTML = ""
    renderMap([lat, lon])
    return data
  } catch (e) {
    console.error("Ошибка HTTP: " + e);
  }
}