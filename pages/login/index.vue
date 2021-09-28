<template>
	<div class="login">
		<view class="login-header">
			<image class="header-avatar" src="~@/static/images/login/avatar.png" />
		</view>
		<view class="login-content">
			<u-form :model="form" ref="uForm">
				<u-row gutter="10" justify="center">
					<u-col span="10">
						<u-form-item prop="username">
							<image class="user-name" :src="userNameImage"></image>
							<u-input trim v-model="form.username" placeholder="用户名" />
						</u-form-item>
					</u-col>
				</u-row>
				<u-row gutter="10" justify="center">
					<u-col span="10">
						<u-form-item prop="password">
							<image class="pass-word" :src="passWordImage"></image>
							<u-input trim v-model="form.password" type="password" :password-icon="passwordIcon"
								placeholder="登录密码" />
						</u-form-item>
					</u-col>
				</u-row>
				<u-row gutter="10" justify="center">
					<u-col span="10">
						<u-form-item prop="intro">
							<u-button @click="handleSubmit" style="background-color: #0079FE;color:#fff">登录</u-button>
						</u-form-item>
					</u-col>
				</u-row>
			</u-form>

		</view>
		<u-toast ref="uToast" />
	</div>
</template>

<script>
	import {
		mapMutations
	} from "vuex";
	export default {
		name: 'Login',
		data() {
			return {
				form: {
					username: "",
					password: ""
				},
				passwordIcon: true,
				userNameImage: require('@/static/images/login/username.png'),
				passWordImage: require('@/static/images/login/password.png'),
				rules: {
					username: [{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change'],
					}],
					password: [{
						required: true,
						min: 3,
						message: '请输入密码，最少6位数',
						trigger: ['blur', 'change']
					}]
				}
			};
		},
		created() {

		},
		mounted() {

		},
		methods: {
			// 引入 vuex
			// ...mapMutations('user', ['SET_TOKEN', 'SET_HOS_ID', 'SET_HOS_NAME','RESET']),
			// 提交
			handleSubmit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// this.login()
						// Tab切换
						uni.switchTab({
							url: '/pages/home/index'
						});
						
						console.log('123...')
						// this.$u.route('/pages/home/index')
						// console.log('234...',this.$u.route)
					}
				});
			},
			// // 登录 
			async login() {
				// 	// 重置 用户信息
				// 	this.RESET()
				// 	// 登录重置
				// 	let loginRes
				// 	// 信息重置
				// 	let infoRes
				// 	try {
				// 		// 获取登录信息
				// 		loginRes = await this.$u.api.userLogin({
				// 			"userid": this.form.username,
				// 			"userpwd": this.form.password
				// 		})
				// 		console.log('loginRes---->',loginRes)
				// 	} catch (err) {
				// 		this.$refs.uToast.show({
				// 			title: err.errMsg,
				// 			type: 'error'
				// 		})
				// 		this.RESET()
				// 		return
				// 	}
				// 	// 保存 token
				// 	this.SET_TOKEN(loginRes.accessToken)
				// 	try{
				// 		// 获取用户信息
				// 		infoRes = await this.$u.api.getUserInfo()
				// 		console.log('infoRes---->',infoRes)
				// 	}catch (err) {
				// 		this.$refs.uToast.show({
				// 			title: err.message,
				// 			type: 'error'
				// 		})
				// 		this.RESET()
				// 		return
				// 	}

				// 	this.SET_HOS_ID(infoRes.userId)
				// 	this.SET_HOS_NAME(infoRes.userName)
				// 	// this.$u.route({
				// 	// 	type:'reLaunch',
				// 	// 	url:'pages/surgery-list/surgery-list'
				// 	// })
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	};
</script>

<style lang="scss">
	page {
		height: 100%;
	}
</style>
<style scoped lang="scss">
	.login {
		background-color: #F9F9F9;
		height: 100%;
		border-top: 1px solid #EBEBEB;

		.login-header {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: nowrap;
			padding: 70px 0 50px;

			.header-avatar {
				width: 100px;
				height: 100px;
				border-radius: 50%;
			}
		}

		.login-content {
			.u-form {
				.u-row {
					.u-col {
						border: 1px solid #ededed;

						.user-name,
						.pass-word {
							width: 20px;
							height: 20px;
							margin: 0 20px;
						}

						::v-deep.u-border-bottom:after {
							border: none;
						}

					}

					&:nth-child(3) {
						border: none;
						margin-top: 30px;

						.u-col {
							border: none;

							.u-btn {
								width: 100%
							}
						}
					}

					&:nth-child(2) {
						.u-col {
							border-top: none;
						}
					}


				}

			}
		}

	}
</style>
