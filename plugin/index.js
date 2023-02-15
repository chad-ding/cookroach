const HtmlWebpackPlugin = require('html-webpack-plugin')

const { SUPPORTED_ASSET_TYPE } = require('./consts')
const { isNull, isArray, isEmpty, isPlainObject, isString } = require('./is')
const logger = require('./logger')
const transformer = require('./transformer')

class AssetsCallbackWebpackPlugin {
	options = {}

	constructor(options) {
		logger.info('初始化...')
		if (isNull(options) || !isPlainObject(options) || isEmpty(options)) {
			const errMsg = '参数不能为空'
			logger.error(errMsg)
			throw new Error('参数不能为空')
		}

		const { assetType, callbackScript, onLoadCallbackName, onErrorCallbackName } = options

		// 校验assetType
		if (!isNull(assetType) && !isArray(assetType)) {
			const errMsg = 'assetType必须为空或是数组类型'
			logger.error(errMsg)
			throw new Error(errMsg)
		} else if (isArray(assetType) && !assetType.every(type => SUPPORTED_ASSET_TYPE.includes(type))) {
			const errMsg = `assetType仅支持${SUPPORTED_ASSET_TYPE.join(',')}类型`
			logger.error(errMsg)
			throw new Error(errMsg)
		}

		// 校验callbackScript
		if (!isString(callbackScript)) {
			const errMsg = 'callbackScript不能为空'
			logger.error(errMsg)
			throw new Error(errMsg)
		} else if (!/^<script[^>]*>.*<\/script>$/m.test(callbackScript)) {
			const errMsg = 'callbackScript必须是一个有效的<script><script/>标签'
			logger.error(errMsg)
			throw new Error(errMsg)
		}

		// 校验onLoadCallbacnName和onErrorCallbackName
		if (
			(isNull(onLoadCallbackName) || !isString(onLoadCallbackName)) &&
			(isNull(onErrorCallbackName) || !isString(onErrorCallbackName))
		) {
			const errMsg = 'onLoadCallbackName和onErrorCallbackName必须传入一个方法名'
			logger.error(errMsg)
			throw new Error(errMsg)
		}

		this.options = Object.assign(
			{
				assetType: ['script'] // 默认支持script
			},
			options
		)
	}

	apply(compiler) {
		const pluginName = 'AssetsCallbackWebpackPlugin'

		if (HtmlWebpackPlugin.getHooks) {
			compiler.hooks.compilation.tap('HtmlWebpackInjectorPlugin', compilation => {
				logger.info('挂载钩子方法...')

				HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(pluginName, (data, cb) => {
					logger.info('开始执行任务...')

					// 对html模板进行处理
					cb(null, transformer.process(data, this.options))
				})
			})
		} else {
			compiler.plugin('compilation', compilation => {
				compilation.plugin('html-webpack-plugin-after-html-processing', (data, cb) => {
					data.html = transformer.processHtml(data.html, this.options)
				})
			})
		}
	}
}

module.exports = AssetsCallbackWebpackPlugin
