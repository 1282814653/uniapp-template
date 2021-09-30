<template>
	<view class="wm-home">
		<u-swiper @click='handelClickSwiper($event)' @change='handeleChangeSwiper($event)' :list="list" mode='round'
			:indicator-pos="bottomCenter " uration="2500" :circular="true"></u-swiper>
	</view>
</template>

<script>
	export default {
		name: 'SwiperItem',

		props: {
			swiperData: {
				type: Array,
			},
			bottomCenter:{
				type:String,
				default:'bottomCenter'
			}
		},
		data() {
			return {
				list: this.swiperData
			};
		},
		created() {},
		mounted() {},
		methods: {
			handelClickSwiper(index) {
				this.$emit('handelClickSwiper', index)
			},
			handeleChangeSwiper(index) {
				this.$emit('handeleChangeSwiper', index)
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
		width: 90%;
		height: 280rpx;
		margin: 20rpx auto;
	}
</style>
