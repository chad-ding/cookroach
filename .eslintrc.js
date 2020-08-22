module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	extends: ['plugin:vue/recommended', 'standard'],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module'
	},
	globals: {
		weex: 'readonly',
		Vue: 'readonly',
		PATH_ASSETS: 'readonly'
	},
	plugins: ['html'],
	rules: {
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 10,
				multiline: {
					max: 10,
					allowFirstLine: true
				}
			}
		],
		'vue/singleline-html-element-content-newline': ['off'],
		'vue/html-indent': ['error', 'tab'],
		'space-before-function-paren': 0,
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-console': ['warn', { allow: ['debug', 'info', 'warn', 'error'] }],
		'no-unused-vars': [
			'warn',
			{
				varsIgnorePattern: 'prompt'
			}
		],
		quotes: [
			'warn',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'linebreak-style': ['warn', 'unix'],
		semi: ['warn', 'never']
	}
}
