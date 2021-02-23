<template>
	<div>
		<div id="tiny-mce-editor" />
	</div>
</template>

<script>
import Tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver'
import 'tinymce/icons/default'
import '../lib/zh_CN'

import 'tinymce/plugins/code'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/emoticons/js/emojis'

import { TINY_MCE_KEY } from '@/const'
import gameIcon from '@/asset/game.svg'

const config = {
	min_height: 100,
	menubar: false,
	resize: false,
	statusbar: false,
	language: 'zh_CN',
	inline_boundaries: false,
	contextmenu_never_use_native: true,
	toolbar_sticky: true,
	paste_block_drop: true,
	placeholder: '请输入内容',
	content_css: './__editor-content.css',
	plugins: [
		'autoresize',
		'emoticons',
		'advlist image charmap anchor',
		'searchreplace visualblocks',
		'paste wordcount code'
	],
	toolbar:
		'bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | emoticons forecolor card'
}

export default {
	data() {
		return {
			tinyMceKey: TINY_MCE_KEY,
			editorConf: config
		}
	},

	mounted() {
		function setup(editor) {
			editor.ui.registry.addIcon('gameCard', gameIcon)

			editor.ui.registry.addButton('card', {
				icon: 'gameCard',
				tooltip: '卡片',
				onAction: function () {
					const template = `
								<div style="padding: 15px;margin-bottom: 20px;border: 1px solid transparent;border-radius: 4px;border-color: #bce8f1;background-color: #d9edf7;color: #31708f;" contenteditable="false">
									hello world
								</div>
							`
					editor.insertContent(template)
				}
			})
		}

		Tinymce.init({
			selector: '#tiny-mce-editor',
			setup,
			paste_preprocess: function (plugin, args) {
				const { content } = args
				console.info(content)
			},
			...config
		})
			.then(editors => {
				this.editor = editors[0]
			})
			.catch(e => {
				console.info('初始化编辑器失败')
				console.error(e.message)
			})
	},
	methods: {
		getContent(type) {
			let content
			if (type === 'full') {
				content = this.editor.getContent()
			} else {
				content = this.editor.selection.getContent()
			}

			console.info(content)
		}
	}
}
</script>
