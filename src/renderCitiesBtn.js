import { getCoordByCity } from "./getCoordByCity";
import { apiKey } from "./constants"

export const renderCitiesBtn = (el) => {
  const container = el.querySelector(".history-cities")
  container.innerHTML = ""
  const store = localStorage.getItem("cities");
  if (store) {
    const cities = JSON.parse(store)
    cities.forEach(item => {
      const cityElement = document.createElement("div")
      cityElement.className = "tag"
      cityElement.innerHTML = item
      cityElement.addEventListener("click", () => getCoordByCity(item, el, apiKey))
      container.append(cityElement)
    })
  }
}