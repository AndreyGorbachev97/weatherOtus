import { templateEngine } from './templateEngine/templateEngine'

export class Component {
	el

	state

	events = {}

	constructor(el, state) {
		this.el = el
		Promise.resolve().then(() => {
			this.setState(state)
			this.el.innerHTML = templateEngine(
				this.render(),
				this.state
			)
			this.onMount(el)
			this.setHandler()
		})
	}

	setHandler() {
		const events = Object.keys(this.events).map(item => ({
			event: item.split('@')[0],
			element: item.split('@')[1],
			action: this.events[item],
		}))

		for (let i = 0; i < events.length; i += 1) {
			const foundElements = this.el.querySelectorAll(
				events[i].element
			)
			;[...foundElements].forEach(foundElement => {
				foundElement?.addEventListener(
					events[i].event,
					events[i].action
				)
			})
		}
	}

	setState(obj) {
		this.state = {
			...this.state,
			...obj,
		}
		this.el.innerHTML = templateEngine(
			this.render(),
			this.state
		)
		this.setHandler()
	}

	onMount(el) {
		return el
	}

	render() {
		return ``
	}
}
