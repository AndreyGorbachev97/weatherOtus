import "../css/style.css";
import { getLocation } from "./getLocation";
import { getCityCoord } from "./getCityCoord"
import { renderCitiesBtn } from "./renderCitiesBtn"
import { renderMap } from "./map"

// Получение геопозиции при входе и отрисовка данных
getLocation()

// Вешаем событие на инпут
const input = document.querySelector(".input")
input?.addEventListener("change", (event) => getCityCoord(event.target.value))

renderCitiesBtn()

export const sum = (a, b) => a + b