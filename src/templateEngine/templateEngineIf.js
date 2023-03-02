export function templateEngineIf() {
	return this.temp.replace(
		/\{\{if (\w+)}}(.+?)\{\{endif\}}/g,
		(_, itemsKey, subTemplate) =>
			this.templateEngine(subTemplate, this.data)
	)
}
