<template>
	<view class="wm-home">
		<view class="wm-home-tabs">
			<view class="home-tabs">
				<u-tabs :list="list" :current="current" @change="handleChangeMenu"></u-tabs>
			</view>
			<view class="home-icon">
				<u-icon name="list-dot" color="gray" size="48" @tap='handleOpenGoodsList'></u-icon>
			</view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TabsItem',
		components: {

		},
		props: {
				
			list:{
				type:Array,
				required:true
			}
		},
		data() {
			return {
				current: 0
			};
		},
		created() {

		},
		mounted() {

		},
		methods: {
			handleChangeMenu(index) {
				this.current = index;
				let val = '您切换了菜单列表...'
				this.$refs.uToast.show({
					title: val,
					type: "success",
				})
			this.$emit('handleChangeMenu',this.current)		
				
			},
			// 打开菜单列表
			handleOpenGoodsList() {
				
				let val = '您点击了菜单列表...'
				this.$refs.uToast.show({
					title: val,
					type: "success",
				})
				this.$emit('handleOpenGoodsList')
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
			justify-content: space-around;
			width: 98%;
			.home-tabs {
				width: 90%;
				// margin: 0 auto;
				// border: 1px solid red;
			}

			.home-icon {
				width: 5%;
			}

		}
	}
</style>
