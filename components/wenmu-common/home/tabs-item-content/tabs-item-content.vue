<template>
    <view class="wm-home" >
		<view class="" v-for="item in tabsData.data" :key='item.id'>
			<text>{{ item.id }}</text>
			<text>{{ item.name }}</text>
		</view>
    </view>
</template>

<script>
export default {
    name: 'TabsItemContent',
    components:{ 

    },
    props:{ 

		tabsData:{
			type:Object,
			required:'',
		}
    },
    data() {
        return {
			tabsDataInfo:this.tabsData
        };
    },
    created() {

    },
    mounted() {
    },
    methods: {

    },
    computed: {

    },
    watch: {

    },
};
</script>

<style scoped lang="scss">

</style>
