import axios from 'axios'
import { getWeatherByCoord } from './getWeatherByCoord'
import { loading } from './loading'
import { RenderCity } from './renderCity'
import { saveHistory } from './saveHistory'
import { renderMap } from './map'

export const getCoordByCity = async (city, el, apiKey) => {
	try {
		loading(el)
		const { data } = await axios.get(
			`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
		)
		saveHistory(city)
		if (data[0]) {
			const { lat, lon } = data[0]
			const wetherForCity = await getWeatherByCoord(
				lat,
				lon,
				el,
				apiKey
			)
			renderMap([lat, lon])
			const container = el.querySelector('.current-city')
			new RenderCity(container, wetherForCity)
		}
		return data[0]
	} catch (e) {
		return e
	}
}
