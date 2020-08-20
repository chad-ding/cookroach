<template>
	<div id="app">
		<ck-editor v-if="editorType === 'ck'" />
		<fr-editor v-else />
	</div>
</template>

<script>
import CKEditor from '@/ck-editor'
import FREditor from '@/fr-editor'

export default {
	name: 'App',
	components: {
		'ck-editor': CKEditor,
		'fr-editor': FREditor
	},
	data() {
		return {
			editorType: 'fr'
		}
	}
}
</script>
