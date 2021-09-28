<template>
	<div class="my">

		<h1>这是 我的 页面 </h1>
		<u-button @click="handleOut">退出</u-button>
	</div>
</template>

<script>
	export default {
		name: 'My',
		components: {

		},
		props: {

		},
		data() {
			return {

			};
		},
		created() {

		},
		mounted() {

		},
		methods: {

			handleOut() {
				this.$u.route("/pages/login/index")
			}
		},
		computed: {

		},
		watch: {

		},
	};
</script>

<style scoped lang="scss">

</style>
