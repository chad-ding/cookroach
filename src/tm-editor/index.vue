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
		return {
			editorConf: {
				height: 500,
				menubar: false,
				plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
				toolbar: 'bold italic color | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
			}
		}
	},
	mounted() {
		console.log(this.$refs.editor)
	}
}
</script>
