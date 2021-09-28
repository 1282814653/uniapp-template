<template>
	<view class="wm-home">
		<view class="wm-home-tabs">
			<view class="home-tabs">
				<u-tabs :list="list" :current="current" @change="change"></u-tabs>
			</view>
			<view class="home-icon">
				<u-icon name="list-dot" color="gray" size="40"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TabsItem',
		components: {

		},
		props: {

		},
		data() {
			return {
				list: [{
						name: '首页',
					},
					{
						name: '衣服鞋帽',

					},
					{
						name: '交通工具',

					},
					{
						name: '家电',

					},
					{
						name: '家具家居',

					},
					{
						name: '珠宝配饰',

					},
					{
						name: '美妆个护',

					},
					{
						name: '运动户外',

					},
					{
						name: '母婴用品',

					},
					{
						name: '玩具乐器',

					},
					{
						name: '手机',

					},
					{
						name: '数码',

					},
					{
						name: '电脑办公',

					}
				],
				current: 0
			};
		},
		created() {

		},
		mounted() {

		},
		methods: {
			change(index) {
				this.current = index;
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
		.wm-home-tabs {
			display: flex;
			align-items: center;
			justify-content: center;
			.home-tabs{
				width: 80%;
				// margin: 0 auto;
				// border: 1px solid red;
			}
			.home-icon{
				width: 5%;
			}
		
		}
	}
</style>
