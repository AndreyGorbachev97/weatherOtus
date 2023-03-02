import { templateEngineData } from '../src/templateEngine/templateEngineData'

describe('templateEngineData', () => {
	it('title: TITLE-123', () => {
		const data = {
			title: 'TITLE-123',
		}
		const temp = `{{title}}`
		const result = templateEngineData.apply({ temp, data })
		expect(result).toEqual('TITLE-123')
	})

	it('not title1', () => {
		const data = {
			title: 'TITLE-123',
		}
		const temp = `{{title1}}`
		const result = templateEngineData.apply({ temp, data })
		expect(result).toEqual('')
	})

	it('empty title', () => {
		const data = {
			title: '',
		}
		const temp = `{{title}}`
		const result = templateEngineData.apply({ temp, data })
		expect(result).toEqual('')
	})
})
