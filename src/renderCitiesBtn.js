import { getCityCoord } from "./getCityCoord";

export const renderCitiesBtn = () => {
  const container = document.querySelector(".history-cities")
  container.innerHTML = ""
  const store = localStorage.getItem("cities");
  if (store) {
    const cities = JSON.parse(store)
    cities.forEach(item => {
      const cityElement = document.createElement("div")
      cityElement.className = "tag"
      cityElement.innerHTML = item
      cityElement.addEventListener("click", () => getCityCoord(item))
      container.append(cityElement)
    })
  }
}