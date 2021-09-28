<template>
	<div class="home">
		<!-- 首页弹窗 图片显示 -->
		<picture-windows :src="srcImg" :show="isShowPicture" @handleGo='handleGo' @handleClose='handleClose'>
		</picture-windows>
	</div>
</template>

<script>
	import PictureWindows from '@/components/wenmu-common/picture-windows/picture-windows.vue'
	export default {
		name: 'Home',
		components: {
			PictureWindows
		},
		props: {

		},
		data() {
			return {
				srcImg: '/static/images/common/reward.png',
				isShowPicture: true
			};
		},
		created() {

		},
		mounted() {

		},
		methods: {
			// 点击弹窗图片进行跳转
			handleGo() {
				this.isShowPicture = false
				// uni.navigateTo({
				// 	url: "/pages/my/index"
				// })
				uni.switchTab({
					url: "/pages/my/index"
				})
			},
			// 关闭图片弹窗
			handleClose() {
				this.isShowPicture = false
			}
		},
		computed: {

		},
		watch: {

		},
	};
</script>

<style scoped lang="scss">

</style>
