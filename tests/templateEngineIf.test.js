import { templateEngineIf } from '../src/templateEngine/templateEngineIf'
import { templateEngine } from '../src/templateEngine/templateEngine'

describe('templateEngineIf', () => {
	it('render title', () => {
		const data = {
			title: 'TITLE',
		}

		const expected = `<h1>TITLE</h1>`

		const temp = `{{if title}}<h1>{{title}}</h1>{{endif}}`

		const result = templateEngineIf.call({
			temp,
			data,
			templateEngine,
		})

		expect(result).toBe(expected)
	})

	it('not render title', () => {
		const data = {
			title123: 'TITLE',
		}

		const expected = `<h1></h1>`

		const temp = `{{if title}}<h1>{{title}}</h1>{{endif}}`

		const result = templateEngineIf.call({
			temp,
			data,
			templateEngine,
		})

		expect(result).toBe(expected)
	})
})
