<template>
	<div id="app">
		<bbs-editor />
	</div>
</template>

<script>
import BBSEditor from '@/bbs-editor'

export default {
	name: 'App',
	components: {
		'bbs-editor': BBSEditor
	}
}
</script>
