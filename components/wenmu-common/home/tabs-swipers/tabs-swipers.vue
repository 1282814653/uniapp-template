<template>
	<view class="wm-home">

		<view class="wm-home-header">
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
				swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
					{{item.name}}
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: 'TabsSwipers',
		components: {

		},
		props: {
			tabsSwipers: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				list: [],
				tabs: [{
						name: "1"
					},
					{
						name: "2"
					},
					{
						name: "3"
					},
					{
						name: "4"
					}
				],
				swiperCurrent: 0,
				current: 0,
			};
		},
		created() {

		},
		mounted() {
			this.list = this.tabsSwipers
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		},
		computed: {

		},
		watch: {

		},
	};
</script>

<style scoped lang="scss">
	.wm-home {
		.wm-home-header {
			::v-deep .u-badge.u-badge-mini {
				top: 3px !important;
				right: -5px !important;
			}
		}
	}
</style>
