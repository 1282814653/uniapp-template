<template>
	<view class="wm-home">
		<view class="wm-home-header" style="display: flex; align-items: center;justify-content: center;">
			<view class="" style="font-size: 40rpx;" @tap='handleBack'>
				< </view>
					<view class="" style="width: 90%;text-align: center;margin: 5px 0;font-size:40rpx;">
						商品列表页面
					</view>
			</view>
			<!-- 购物中心菜单列表 -->
			<mall-menu-list></mall-menu-list>
		</view>
</template>

<script>
	// 购物中心菜单列表
	import MallMenuList from "@/components/wenmu-common/home/mall-menu/mall-menu.vue"
	export default {
		name: 'MallMenu',
		components: {
			MallMenuList,
		},
		props: {

		},
		data() {
			return {

			};
		},
		created() {

		},
		mounted() {

		},
		methods: {
			handleBack() {
				console.log('123...')
				uni.switchTab({
					url:'/pages/home/index'
				})
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
