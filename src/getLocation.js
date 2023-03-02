import { initWeather } from './initWeather'

export function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initWeather)
	} else {
		alert('Браузер не поддерживает геолокацию.')
	}
}
