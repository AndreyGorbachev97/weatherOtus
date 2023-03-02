import { Component } from './Component'
import { getCoordByCity } from './getCoordByCity'
import { apiKey } from './constants'

export class RenderUI extends Component {
	state = {
		input: '',
	}

	setInputValue = async ev => {
		const { value } = ev.target
		this.setState({
			input: value,
		})
		this.setTags(
			[{ name: value }, ...this.state.tags].slice(0, 10)
		)
		// Поиск города
		await getCoordByCity(value, this.el, apiKey)
	}

	setTags(tags) {
		this.setState({
			tags,
		})
	}

	onMount() {
		console.log('STATE', this.state)
		const store = localStorage.getItem('cities')
		const tags = store
			? JSON.parse(store).map(item => ({ name: item }))
			: []
		this.setTags(tags)
	}

	changeCity = async ev => {
		const city = ev.target.innerHTML
		this.setTags(
			[{ name: city }, ...this.state.tags].slice(0, 10)
		)
		await getCoordByCity(
			ev.target.innerHTML,
			this.el,
			apiKey
		)
	}

	events = {
		'change@input': this.setInputValue,
		'click@div.tag': this.changeCity,
	}

	render() {
		return `
    <div class="container">
      {{if title}}<h1>{{title}}</h1>{{endif}}
      <input 
        value="${this.state.input}"
        placeholder="Введите название города"
        class="input" 
      />
      <div class="current-city"></div>
      <h2 class="label">История запросов погоды</h2>
      <div class="history-cities">
{{for tags}}<div class="tag">{{name}}</div>{{if lastIndex}}👌{{endif}}{{endfor}}
      </div>
      <div id="map" class="map"></div>
    </div>
  `
	}
}
