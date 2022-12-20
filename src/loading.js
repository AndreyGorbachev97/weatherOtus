export const loading = () => {
  const container = document.querySelector(".current-city")
  container.innerHTML = ""
  const load = document.createElement("div");
  load.className = "loading"
  load.innerText = "Загрузка данных..."
  container.append(load)
}