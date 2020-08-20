<template>
	<div>
		<editor ref="editor" api-key="no-api-key" :init="editorConf" />
	</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
	components: {
		editor: Editor
	},
	data() {
		const vm = this
		return {
			editorConf: {
				min_height: 100,
				menubar: false,
				resize: false,
				statusbar: false,
				language: 'zh_CN',
				plugins: ['autoresize', 'emoticons', 'advlist autolink link image charmap anchor', 'searchreplace visualblocks', 'media paste wordcount'],
				toolbar: 'card | bold italic color | alignleft aligncenter alignright alignjustify | emoticons',
				setup: function(editor) {
					vm.editor = editor
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
		}
	},
	methods: {
		getContent() {
			const content = this.editor.getContent()
			console.log(content)
		}
	}
}
</script>
