<template>
	<div id="app">
		<ckeditor
			ref="ckeditor"
			v-model="editorData"
			:editor="editor"
			:config="editorConfig"
		/>
	</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials'
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold'
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic'
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link'
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Aligment from '@ckeditor/ckeditor5-alignment/src/alignment'

export default {
	name: 'App',
	data() {
		return {
			editor: ClassicEditor,
			editorData: '<p>hello world...</p>',
			editorConfig: {
				plugins: [
					EssentialsPlugin,
					Aligment,
					ItalicPlugin,
					BoldPlugin,
					LinkPlugin,
					ParagraphPlugin
				],
				link: {
					decorators: {
						isExternal: {
							mode: 'automatic',
							attributes: {
								target: '_blank',
								rel: 'noopener noreferrer'
							}
						}
					}
				},
				alignment: {
					options: ['left', 'right', 'center']
				},
				toolbar: {
					items: ['bold', 'alignment', 'italic', 'link']
				}
			}
		}
	}
}
</script>
