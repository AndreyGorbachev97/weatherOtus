export const loading = (el) => {
  const container = el.querySelector(".current-city")
  if (container) {
    container.innerHTML = ""
    const load = document.createElement("div");
    load.className = "loading"
    load.innerText = "Загрузка данных..."
    container.append(load)
  }
}