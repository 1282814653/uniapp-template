<template>
	<view class="wm-home" :class="show ?'wm-show':''">
		<view class="wm-home-img">
			<image class="wm-img" :src="src" lazy-load mode="widthFix" @tap='handleGo'></image>
			<text class="wm-close-icon wm-close" @tap='handleClose'></text>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'PictureWindows', // 图片弹窗
		props: {
			src: {
				type: String,
				default: ''
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {};
		},
		mounted() {
		},
		methods: {
			// 点击图片跳转
			handleGo() {
				this.$emit('handleGo')
			},
			// 关闭
			handleClose() {
				this.$emit('handleClose')
			}
		},
	};
</script>

<style scoped lang="scss">
	.wm-home {
		position: fixed;
		opacity: 0;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		text-align: center;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.3s;
		pointer-events: none;

		&::before {
			content: '\200B';
			display: inline-block;
			height: 100%;
			vertical-align: middle;
		}

		.wm-home-img {
			position: relative;
			display: inline-block;
			vertical-align: middle;
			width: 618rpx;

			.wm-img {
				width: 100%;
				border-radius: 3%;
			}

			.wm-close {
				color: #dadada;
				top: 18.18rpx;
				position: relative;
				font-size: 54.54rpx;
			}
		}
	}

	.wm-home.wm-show {
		opacity: 1;
		pointer-events: auto;
		.wm-close-icon:before {
			content: "X";
			padding: 0 18rpx;
			border: 1px solid #dadada;
			border-radius: 50%;
		}
	}
</style>
