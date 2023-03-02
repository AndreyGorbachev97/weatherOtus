module.exports = {
	env: {
		browser: true,
		es2021: true,
		'jest/globals': true,
	},
	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['jest'],
	ignorePatterns: ['*test.js'],
	rules: {
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
		'import/prefer-default-export': 'off',
		'class-methods-use-this': 'off',
		'no-new': 0,
		'no-param-reassign': ['error', { props: false }],
		'max-len': [
			'error',
			{
				ignoreComments: true,
				ignoreUrls: true,
			},
		],
	},
}
