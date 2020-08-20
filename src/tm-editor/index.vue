<template>
	<div>
		<div id="tiny-mce-editor" />
	</div>
</template>
<style lang="less" scoped>
@import '../../node_modules/tinymce/skins/ui/oxide/skin.min.css';
@import '../../node_modules/tinymce/skins/content/default/content.min.css';
</style>

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

const config = {
	min_height: 100,
	menubar: false,
	resize: false,
	statusbar: false,
	language: 'zh_CN',
	plugins: ['autoresize', 'emoticons', 'advlist link image charmap anchor', 'searchreplace visualblocks', 'paste wordcount code'],
	toolbar: 'card | bold italic forecolor | alignleft aligncenter alignright alignjustify | emoticons',
	setup: function(editor) {
		editor.ui.registry.addButton('card', {
			text: 'Card',
			onAction: function() {
				const template = `
								<div style="padding: 15px;margin-bottom: 20px;border: 1px solid transparent;border-radius: 4px;border-color: #bce8f1;background-color: #d9edf7;color: #31708f;" contenteditable="false">
									hello world
								</div>
							`
				editor.insertContent(template)
			}
		})
	}
}

export default {
	data() {
		return {
			tinyMceKey: TINY_MCE_KEY,
			editorConf: config
		}
	},

	mounted() {
		Tinymce.init({
			selector: '#tiny-mce-editor',
			...config
		})
	},
	methods: {
		getContent() {
			const content = this.editor.getContent()
			console.log(content)
		}
	}
}
</script>
