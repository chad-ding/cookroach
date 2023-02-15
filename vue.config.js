const AssetsCallbackWebpackPlugin = require('./plugin/index')

module.exports = {
	configureWebpack: config => {
		config.plugins.push(
			new AssetsCallbackWebpackPlugin({
				callbackScript: "<script>window.report = function(){console.log('111111')}</script>",
				onLoadCallbackName: 'report',
				onErrorCallbackName: 'report'
			})
		)
	},
	chainWebpack: config => {
		const svgRule = config.module.rule('svg')

		// 清除已有的所有 loader。
		// 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
		svgRule.uses.clear()

		// 添加要替换的 loader
		svgRule.use('raw-loader').loader('raw-loader')
	}
}
