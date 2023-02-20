const { parse } = require('node-html-parser')

const { isNull, isString } = require('./is')
const logger = require('./logger')

const config = {
	lowerCaseTagName: false, // convert tag name to lower case (hurts performance heavily)
	comment: false, // retrieve comments (hurts performance slightly)
	voidTag: {
		tags: [
			'area',
			'base',
			'br',
			'col',
			'embed',
			'hr',
			'img',
			'input',
			'link',
			'meta',
			'param',
			'source',
			'track',
			'wbr'
		], // optional and case insensitive, default value is ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']
		addClosingSlash: true // optional, default false. void tag serialisation, add a final slash <br/>
	},
	blockTextElements: {
		script: true, // keep text content when parsing
		noscript: true, // keep text content when parsing
		style: true, // keep text content when parsing
		pre: true // keep text content when parsing
	}
}

// 移除链接中的协议部分
function removePorotocol(link) {
	return link.startsWith('//') ? link : link.substring(link.indexOf('//'))
}

module.exports = {
	process(input, options) {
		// 进行深拷贝避免污染原始数据
		let data = {}
		try {
			const copy = JSON.stringify(input)

			data = JSON.parse(copy)
		} catch (e) {
			logger.error('拷贝数据失败')
			return input
		}

		const { html, bodyTags = [] } = data

		data.html = this.processHtml(html, options)

		// 处理插入的bundle文件
		data.bodyTags = this.processBundle(bodyTags, options)

		return data
	},
	// 向bundle代码中写入回调代码
	processBundle(input, options) {
		logger.info('处理bundle文件...')

		console.log(JSON.stringify(input))

		if (!input || !input.length) {
			return
		}
		const { assetType, onLoadCallbackName, onErrorCallbackName } = options

		input.forEach(tag => {
			const { tagName, attributes } = tag

			if (!assetType.includes(tagName)) {
				return
			}

			// 内联scrit标签不做处理
			if (tagName === 'script' && (isNull(attributes) || isNull(attributes.src))) {
				return
			}

			if (!isNull(onLoadCallbackName)) {
				attributes.onload = `${onLoadCallbackName} && ${onLoadCallbackName}(this)`
			}
			if (!isNull(onErrorCallbackName)) {
				attributes.onerror = `${onErrorCallbackName} && ${onErrorCallbackName}(this)`
			}
		})

		return input
	},

	processHtml(input, options) {
		logger.info('处理html模板...')

		let html
		try {
			html = parse(input, config)
		} catch (e) {
			logger.error('解析html失败')
			logger.error(e)

			return input
		}

		const scripts = html.getElementsByTagName('script')
		const { callbackScript, onLoadCallbackName, onErrorCallbackName, indexCallback } = options

		if (scripts.length === 0) {
			const node = parse(callbackScript)

			html.getElementsByTagName('head')[0].appendChild(node)
		} else {
			const result = /\s+src="([^"]+)"/.exec(callbackScript) // 上报代码是否内联

			let scriptSrc = '' // 外联脚本路径
			if (result) {
				scriptSrc = removePorotocol(result[1])
			}

			// 插入上报脚本
			scripts[0].insertAdjacentHTML('beforebegin', callbackScript)

			let existReportNode // 如果模板中已经插入了上报脚本，那么就移动到最上面的位置
			Array.from(scripts).forEach(node => {
				const src = node.getAttribute('src')
				if (!src) {
					return
				} else if (scriptSrc && removePorotocol(src) === scriptSrc) {
					existReportNode = node
					return
				}

				if (onLoadCallbackName) {
					node.setAttribute('onload', `${onLoadCallbackName} && ${onLoadCallbackName}(this)`)
				}

				if (onErrorCallbackName) {
					node.setAttribute('onerror', `${onErrorCallbackName} && ${onErrorCallbackName}(this)`)
				}
			})

			// 删除重复的上报代码
			if (existReportNode) {
				existReportNode.remove()
			}
		}

		// 如果有index上报代码，插入在第一个位置
		if (isString(indexCallback)) {
			const firstScript = html.getElementsByTagName('script')[0]
			firstScript.insertAdjacentHTML('beforebegin', indexCallback)
		}

		return html.toString()
	}
}
