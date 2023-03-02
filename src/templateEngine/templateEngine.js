import { templateEngineIf } from './templateEngineIf'
import { templateEngineData } from './templateEngineData'
import { templateEngineFor } from './templateEngineFor'

export function templateEngine(tpl, data) {
	let temp = tpl

	temp = templateEngineFor.call({
		temp,
		data,
		templateEngine,
	})

	temp = templateEngineIf.call({
		temp,
		data,
		templateEngine,
	})

	temp = templateEngineData.call({ temp, data })

	return temp
}
