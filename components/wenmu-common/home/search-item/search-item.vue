<template>
	<view class="wm-home">
		<view class="wm-home-search">
			<u-search placeholder="请输入搜索内容" v-model="keyword"   @custom="handleSearch" @search='handleSearch'></u-search>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'SearchItem',
		components: {

		},
		props: {

		},
		data() {
			return {
				keyword: ''
			};
		},

		mounted() {

		},
		methods: {
			handleChange() {
				console.log('789...');
			},
			handleSearch() {
			
				this.$refs.uToast.show({
					title: '点击了搜索',
					type: 'success',
				})
				// uni.navigateTo({
				// 	url: '/pages/my/index'
				// })
			}
		},

	};
</script>

<style scoped lang="scss">
	.wm-home {
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 90%;
		margin: 0 auto;

		.wm-home-search {
			width: 100%;
		}


	}
</style>
