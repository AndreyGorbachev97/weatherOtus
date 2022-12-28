export const renderUI = (el) => {
  el.innerHTML = `
    <div class="container">
      <h1>MeteoOtus</h1>
      <input placeholder="Введите название города" class="input" />
      <div class="current-city"></div>
      <h2 class="label">История запросов погоды</h2>
      <div class="history-cities"></div>
      <div id="map" class="map"></div>
    </div>
  `;
}