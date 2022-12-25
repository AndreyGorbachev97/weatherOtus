import "../css/style.css";
import { apiKey } from "./constants";
import { getLocation } from "./getLocation";
import { getCoordByCity } from "./getCoordByCity";
import { renderCitiesBtn } from "./renderCitiesBtn";
import { renderUI } from "./renderUI";

// Рендер начального HTML
const body = document.querySelector("body");
renderUI(body);

// Получение геопозиции при входе и отрисовка данных
getLocation(body);

// Вешаем событие на инпут
const input = body.querySelector(".input");
input?.addEventListener("change", (event) => {
  getCoordByCity(event.target.value, body, apiKey);
});

renderCitiesBtn(body);
