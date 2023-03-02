export function templateEngineFor() {
	return this.temp.replace(
		/\{\{for (\w+)}}(.+?)\{\{endfor\}}/g,
		(match, itemsKey, subTemplate) => {
			let res = ''
			if (itemsKey in this.data) {
				for (
					let i = 0;
					i < this.data[itemsKey].length;
					i += 1
				) {
					if (i !== this.data[itemsKey].length - 1) {
						const replaceSubTemplate = subTemplate.replace(
							/\{\{if lastIndex}}(.+?)\{\{endif\}}/g,
							''
						)
						res += this.templateEngine(
							replaceSubTemplate,
							this.data[itemsKey][i]
						)
					} else {
						res += this.templateEngine(
							subTemplate,
							this.data[itemsKey][i]
						)
					}
				}
			}
			return res
		}
	)
}
