import "../css/style.css";
import { getLocation } from "./getLocation";
import { getCityCoord } from "./getCityCoord";
import { renderCitiesBtn } from "./renderCitiesBtn";
import { renderUI } from "./renderUI";


// Рендер начального HTML
const body = document.querySelector("body")
renderUI(body)

// Получение геопозиции при входе и отрисовка данных
getLocation(body)

// Вешаем событие на инпут
const input = body.querySelector(".input")
input?.addEventListener("change", (event) => getCityCoord(event.target.value, body))

renderCitiesBtn()

export const sum = (a, b) => a + b