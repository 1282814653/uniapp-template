<template>
	<div class="home">
		<!-- 搜索 -->
		<search-item></search-item>
		<!-- 选项卡 -->
		<tabs-item></tabs-item>


		<!-- 首页弹窗 图片显示 -->
		<picture-windows :src="srcImg" :show="isShowPicture" @handleGo='handleGo' @handleClose='handleClose'>
		</picture-windows>
	</div>
</template>

<script>
	// tabs 选项卡
	import TabsItem from '@/components/wenmu-common/tabs-item/tabs-item'
	// 搜索栏
	import SearchItem from '@/components/wenmu-common/search-item/search-item.vue'
	// 图片弹窗 
	import PictureWindows from '@/components/wenmu-common/picture-windows/picture-windows.vue'
	export default {
		name: 'Home',
		components: {
			TabsItem,
			// 
			SearchItem,
			PictureWindows
		},
		props: {

		},
		data() {
			return {
				srcImg: '/static/images/common/reward.png',
				isShowPicture: false
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
