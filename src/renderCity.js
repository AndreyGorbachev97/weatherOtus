export const renderCity = async (city) => {
  console.log("city", city)
  const temp = city.main.temp - 273.15;
  const cityName = city.name;
  const iconId = city.weather[0].icon;
  const desc = city.weather[0].description;
  const container = document.querySelector(".current-city")
  container.innerHTML = ""

  const info = document.createElement("div")
  info.classList = "info-wether"
  const pCityName = document.createElement("div")
  const bTemp = document.createElement("h2")
  const pTemp = document.createElement("div")
  const icon = document.createElement("img")
  icon.className = "img"
  const pDesc = document.createElement("div")

  icon.src = `https://openweathermap.org/img/w/${iconId}.png`
  pCityName.innerText = `${cityName}`
  bTemp.innerText = temp.toFixed(2)
  pTemp.innerText = `Температура воздуха составляет ${temp.toFixed(2)} градус(ов)`
  pDesc.innerText = desc

  info.append(bTemp)
  info.append(pCityName)
  info.append(pTemp)
  info.append(pDesc)
  container.append(icon)
  container.append(info)

}