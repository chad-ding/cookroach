<template>
	<div id="app">
		<div class="content">
			<div>
				<tm-editor ref="tmeditor" />
			</div>
			<div>
				<button class="btn" @click="onClick('full')">查看全部内容</button>
				<button class="btn" @click="onClick('selection')">查看选中内容</button>
			</div>
		</div>
	</div>
</template>

<script>
import TMEditor from '@/tm-editor'

export default {
	name: 'App',
	components: {
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

<style lang="less" scoped>
#app {
	display: flex;
	justify-content: center;
	width: 100%;
}

.content {
	width: 1080px;
}

.btn {
	background-color: #337ab7;
	background-image: none;
	border: 1px solid transparent;
	border-color: #2e6da4;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.42857143;
	margin-bottom: 5px;
	margin-bottom: 0;
	margin-top: 5px;
	padding: 6px 12px;
	text-align: center;
	touch-action: manipulation;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;

	&:first-child {
		margin-right: 30px;
	}
}
</style>
