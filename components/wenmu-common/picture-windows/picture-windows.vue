<template>
	<view class="wm-modal-box" :class="show ?'show':''">
		<view class="wm-dialog">
			<image class="wm-img" :src="src" lazy-load mode="" @tap='handleGo'></image>
			<text class="cuIcon-roundclose close" @tap='handleClose'></text>
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
		created() {

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
		computed: {

		},
		watch: {

		},
	};
</script>

<style scoped lang="scss">
	.wm-modal-box {
		position: fixed;
		opacity: 0;
		top: initial;
		left: inherit;
		right: inherit;
		bottom: inherit;
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

		.wm-dialog {
			position: relative;
			display: inline-block;
			vertical-align: middle;
			width: 618rpx;
			height: 720rpx;

			.wm-img {
				width: 100%;
				height: 100%;
				border-radius: 3%;
			}

			.close {
				color: #dadada;
				top: 18.18rpx;
				position: relative;
				font-size: 54.54rpx;
			}
		}
	}

	.wm-modal-box.show {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 1;
		pointer-events: auto;
		.cuIcon-roundclose:before {
			content: "X";
			padding: 0 18rpx;
			border: 1px solid #dadada;
			border-radius: 50%;
		}
	}
</style>
