import "../css/style.css";
import { getLocation } from "./getLocation";
import { loading } from "./loading";
import { apiKey } from "./constants";
import { renderCity } from "./renderCity"
import { getCityCoord } from "./getCityCoord"
import { renderCitiesBtn } from "./renderCitiesBtn"

// Получение геопозиции при входе и отрисовка данных
getLocation()

// Вешаем событие на инпут
const input = document.querySelector(".input")
input.addEventListener("change", (event) => getCityCoord(event.target.value))

renderCitiesBtn()


export const sum = (a, b) => a + b