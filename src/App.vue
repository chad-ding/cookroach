<template>
	<div id="app">
		<bbs-editor />
	</div>
</template>

<script>
import BBSEditor from '@/component/bbs-editor'

export default {
	name: 'App',
	components: {
		'bbs-editor': BBSEditor
	}
}
</script>
