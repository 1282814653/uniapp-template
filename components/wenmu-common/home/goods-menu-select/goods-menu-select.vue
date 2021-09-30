<template>
	<view class="wm-home">
		<swiper class="swiper" @change="handleChangeMenu">
			<swiper-item>
				<u-grid :col="5" @click="handleClickMenu" hover-class="hover-class" :border='false'>
					<u-grid-item v-for="(item, index) in list.slice(0,10)" :index="index" :key="index">
						<u-badge v-if="item.count" :count="item.count" :offset="[20, 20]"
							style="transform: scale(0.8);right: 5px;"></u-badge>
						<!-- <u-icon :name="item.icon" :size="46"></u-icon> -->
						<image :src="item.icon" style="width: 60rpx;height: 60rpx;margin-bottom:6rpx;"></image>
						<text class="grid-text">{{ item.title }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
			<swiper-item>
				<u-grid :col="5" @click="handleClickMenu" :border='false'>
					<u-grid-item v-for="(item,index) in list.slice(10)" :index="(index+10)" :key="index">
						<u-badge v-if="item.count" :count="item.count" :offset="[20, 20]"
							style="transform: scale(0.8);right: 5px;"></u-badge>
						<u-icon :name="item.icon" :size="46"></u-icon>
						<text class="grid-text">{{ item.title }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
		</swiper>
		<view class="indicator-dots">
			<view class="indicator-dots-item" :class="[current == 0 ? 'indicator-dots-active' : '']">
			</view>
			<view class="indicator-dots-item" :class="[current == 1 ? 'indicator-dots-active' : '']">
			</view>
		</view>


	</view>
</template>

<script>
	import goods_menu_select_data from '@/static/datas/home/goods-menu-select.js'
	export default {
		name: 'GoodsMenuSelect',
		components: {

		},
		props: {

		},
		data() {
			return {
				current: 0,
				list: goods_menu_select_data,
			};
		},
		created() {

		},
		mounted() {
			// console.log('this.list--->', this.list)
		},
		methods: {

			handleChangeMenu(e) {
				this.current = e.detail.current;
			},

			handleClickMenu(val) {
				console.log('handleClickMenu-->', val)
				this.$emit("handleClickMenu", val)
			}
		},
		computed: {

		},
		watch: {

		},
	};
</script>

<style scoped lang="scss">
	.indicator-dots {
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.indicator-dots-item {
		background-color: $u-tips-color;
		height: 6px;
		width: 6px;
		border-radius: 10px;
		margin: 0 3px;
	}

	.indicator-dots-active {
		background-color: $u-type-primary;
	}
</style>
