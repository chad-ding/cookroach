<template>
	<div id="app">
		<div class="content">
			<div>
				<ck-editor v-if="editorType === 'ck'" ref="ckeditor" />
				<tm-editor v-if="editorType === 'tm'" ref="tmeditor" />
				<fr-editor v-else ref="freditor" />
			</div>
			<div>
				<button class="btn" @click="onClick('full')">查看全部内容</button>
				<button class="btn" @click="onClick('selection')">查看选中内容</button>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
#app {
	width: 100%;
	display: flex;
	justify-content: center;
}
.content {
	width: 1080px;
}
.btn {
	&:first-child {
		margin-right: 30px;
	}
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
	},
	methods: {
		onClick(type) {
			this.$refs.tmeditor.getContent(type)
		}
	}
}
</script>
