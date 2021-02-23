module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard']
		},
		{
			files: ['*.vue'],
			extends: [
				'standard',
				'plugin:vue/recommended',
				'plugin:prettier/recommended',
				'prettier/standard',
				'prettier/vue'
			]
		},
		{
			files: ['*.html'],
			extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
			// 利用eslint-plugin-html解析script标签内容
			plugins: ['html'],
			env: {
				// 禁止node、es2021全局变量
				node: false,
				es2021: false
			},
			parserOptions: {
				/**
				 * 非模块类型，这样script中的变量会解析为全局变量
				 * 如果为<script type="module">，则需要设置成sourceType: 'module'
				 */
				sourceType: 'script',
				// 只允许es5语法
				ecmaVersion: 5,
				ecmaFeatures: {
					jsx: false
				}
			}
		}
	]
}
