<template>
	<view class="wm-home">
		<view class="wm-home-header">
			<!-- 搜索 -->
			<search-item></search-item>
			<!-- 选项卡 -->
			<tabs-item :list='nvaList' @handleChangeMenu='handleChangeMenu' @handleOpenGoodsList='handleOpenGoodsList'>
			</tabs-item>
			<!-- 轮播图 -->
			<swipers-item v-if="isShowSwiperCom" @handeleChangeSwiper='handeleChangeSwiper'
				@handelClickSwiper='handelClickSwiper' :swiperData="swiperData"></swipers-item>
		</view>
		<goods-menu-select v-if="isShowSwiperCom" @handleClickMenu='handleClickMenu'></goods-menu-select>
		<!-- 根据选项卡显示内容 -->
		<tabs-item-content :tabsData="tabsData"></tabs-item-content>
		<tabs-swipers style="height: 1200rpx;" :tabsSwipers='tabsSwipers'></tabs-swipers>

		<!-- 首页弹窗 图片显示 -->
		<picture-windows :src="srcImg" :show="isShowPicture" @handleGo='handleGo' @handleClose='handleClose'>
		</picture-windows>

	</view>
</template>

<script>
	import TabsSwipers from '@/components/wenmu-common/home/tabs-swipers/tabs-swipers.vue'

	// 商品菜单列表
	import GoodsMenuSelect from '@/components/wenmu-common/home/goods-menu-select/goods-menu-select.vue'
	// 轮播图
	import SwipersItem from '@/components/wenmu-common/home/swipers-item/swipers-item.vue'
	// tabs 选项卡内容
	import TabsItemContent from '@/components/wenmu-common/home/tabs-item-content/tabs-item-content.vue'
	// tabs 选项卡
	import TabsItem from '@/components/wenmu-common/home/tabs-item/tabs-item'
	// 搜索栏
	import SearchItem from '@/components/wenmu-common/home/search-item/search-item.vue'
	// 图片弹窗 
	import PictureWindows from '@/components/wenmu-common/home/picture-windows/picture-windows.vue'

	// siper 轮播图数据
	import swiper_datas from '@/static/datas/home/SwiperDatas.js'
	// tabs 选项卡数据
	import tabs_datas from '@/static/datas/home/tabsDatas.js'
	// 数据词典 
	import homes from '@/static/datas/home/dictionary.js'
	export default {
		name: 'Home',
		components: {
			TabsSwipers,
			GoodsMenuSelect,
			SwipersItem,
			TabsItemContent,
			TabsItem,
			SearchItem,
			PictureWindows
		},
		props: {

		},
		data() {
			return {
				srcImg: '/static/images/common/reward.png',
				isShowPicture: false,
				nvaList: [],
				tabsSwipers: [],
				tabsData: {},
				swiperData: [],
				isShowSwiperCom: true,
			};
		},
		created() {
			this.nvaList = homes.nav_list
			this.tabsSwipers = homes.tabs_swipers
			this.swiperData = swiper_datas
			this.handleChangeMenu(0)
		},
		mounted() {},
		methods: {
			// 点击菜单跳转
			handleClickMenu(val) {
				switch (val) {
					case 0:
						// this.$u.route('/pages/my/index')
						uni.switchTab({
							url: '/pages/my/index'
						})
						break
					case 1:
						// this.$u.route('/pages/info/index')
						uni.switchTab({
							url: '/pages/info/index'
						})
						break
					case 2:
						// this.$u.route('/pages/other/index')
						uni.switchTab({
							url: '/pages/other/index'
						})
						break
				}
			},
			// 查看商品列表
			handleOpenGoodsList() {
				this.$u.route("/pages/home/mall-menu")
			},
			// 点击事件
			handelClickSwiper(index) {
				// console.log('点击事件',index);
			},
			// 自动轮播事件
			handeleChangeSwiper(index) {
				// console.log('自动轮播事件',index);
			},
			// 切换菜单列表
			handleChangeMenu(val) {
				// console.log('isShowSwiperCom', this.isShowSwiperCom, val)
				val == 0 ? this.isShowSwiperCom = true : this.isShowSwiperCom = false;
				this.tabsData = tabs_datas.find(ele => ele.id == val)
				// if (val == 0) {
				// 	// this.isShowSwiperCom = true
				// 	return this.isShowSwiperCom = true
				// } else {
				// 	this.isShowSwiperCom = false
				// }
			},
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
			},

		},
		computed: {

		},
		watch: {
			isShowSwiperCom() {
				// console.log('切换', this.isShowSwiperCom)
				return this.isShowSwiperCom
			}
		},
	};
</script>

<style scoped lang="scss">
	.wm-home {
		.wm-home-header {}
	}
</style>
