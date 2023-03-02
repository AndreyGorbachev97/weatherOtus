export function templateEngineData() {
	return this.temp.replace(
		/\{\{(\w+)\}\}/g,
		(match, varName) =>
			this.data[varName] ? this.data[varName] : ''
	)
}
