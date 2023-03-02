import '../css/style.css'
import { getLocation } from './getLocation'
import { RenderUI } from './renderUI'

const body = document.querySelector('body')
// Получение геопозиции при входе и отрисовка данных
getLocation(body)

// Рендер app
new RenderUI(body, {
	title: 'MeteoOtus',
})
