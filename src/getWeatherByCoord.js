import { apiKey } from "./constants"

export const getWeatherByCoord = async (lat, lon) => {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=RU&appid=${apiKey}`)
    const data = await res.json();
    if (data.cod !== 200) throw new Error(data.message)
    return data
  } catch (e) {
    alert("Ошибка HTTP: " + e);
  }
}