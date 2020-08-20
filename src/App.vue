<template>
	<div id="app">
		<div>
			<ck-editor v-if="editorType === 'ck'" />
			<tm-editor v-if="editorType === 'tm'" />
			<fr-editor v-else />
		</div>
		<div>
			<button class="btn">提交</button>
		</div>
	</div>
</template>

<style lang="less" scoped>
.btn {
	color: #fff;
	background-color: #337ab7;
	border-color: #2e6da4;
	margin-top: 5px;
	margin-bottom: 5px;
	display: inline-block;
	padding: 6px 12px;
	margin-bottom: 0;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.42857143;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	touch-action: manipulation;
	cursor: pointer;
	user-select: none;
	background-image: none;
	border: 1px solid transparent;
	border-radius: 4px;
}
</style>

<script>
import CKEditor from '@/ck-editor'
import FREditor from '@/fr-editor'
import TMEditor from '@/tm-editor'

export default {
	name: 'App',
	components: {
		'ck-editor': CKEditor,
		'fr-editor': FREditor,
		'tm-editor': TMEditor
	},
	data() {
		return {
			editorType: 'tm'
		}
	}
}
</script>
