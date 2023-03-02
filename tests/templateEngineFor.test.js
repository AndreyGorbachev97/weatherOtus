import { templateEngineFor } from '../src/templateEngine/templateEngineFor'
import { templateEngine } from '../src/templateEngine/templateEngine'

describe('templateEngineFor', () => {
	it('render tags', () => {
		const data = {
			tags: [{ name: '1' }, { name: '2' }, { name: '3' }],
		}

		const expected = `<div>
      <div class="tag">1</div><div class="tag">2</div><div class="tag">3</div>
    </div>`

		const temp = `<div>
      {{for tags}}<div class="tag">{{name}}</div>{{endfor}}
    </div>`

		const result = templateEngineFor.call({
			temp,
			data,
			templateEngine,
		})

		expect(result).toBe(expected)
	})
})
