<template>
	<div id="editor" />
</template>

<script>
import FroalaEditor from 'froala-editor'
import 'froala-editor/js/languages/zh_cn'
import 'froala-editor/js/plugins/emoticons.min.js'

export default {
	mounted() {
		const editor = new FroalaEditor('#editor', {
			language: 'zh_cn',
			toolbarButtons: ['bold', 'italic', 'emoticons'],
			emoticonsUseImage: false,
			emoticonsStep: 4,
			emoticonsSet: [
				{
					id: 'people',
					name: '笑脸',
					code: '1f600',
					emoticons: [
						{ code: '1f600', desc: 'Grinning face' },
						{ code: '1f601', desc: 'Grinning face with smiling eyes' },
						{ code: '1f602', desc: 'Face with tears of joy' },
						{ code: '1f603', desc: 'Smiling face with open mouth' },
						{ code: '1f604', desc: 'Smiling face with open mouth and smiling eyes' },
						{ code: '1f605', desc: 'Smiling face with open mouth and cold sweat' },
						{ code: '1f606', desc: 'Smiling face with open mouth and tightly-closed eyes' },
						{ code: '1f607', desc: 'Smiling face with halo' }
					]
				},
				{
					id: 'nature',
					name: '动物',
					code: '1F435',
					emoticons: [
						{ code: '1F435', desc: 'Monkey Face' },
						{ code: '1F412', desc: 'Monkey' },
						{ code: '1F436', desc: 'Dog Face' },
						{ code: '1F415', desc: 'Dog' },
						{ code: '1F429', desc: 'Poodle' },
						{ code: '1F43A', desc: 'Wolf Face' },
						{ code: '1F431', desc: 'Cat Face' },
						{ code: '1F408', desc: 'Cat' },
						{ code: '1F42F', desc: 'Tiger Face' },
						{ code: '1F405', desc: 'Tiger' },
						{ code: '1F406', desc: 'Leopard' },
						{ code: '1F434', desc: 'Horse Face' },
						{ code: '1F40E', desc: 'Horse' },
						{ code: '1F42E', desc: 'Cow Face' },
						{ code: '1F402', desc: 'Ox' },
						{ code: '1F403', desc: 'Water Buffalo' }
					]
				}
			]
		})
	}
}
</script>

<style lang="less" scoped>
@import '../../node_modules/froala-editor/css/froala_editor.pkgd.min.css';
</style>
