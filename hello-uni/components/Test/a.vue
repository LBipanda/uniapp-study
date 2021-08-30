<template>
	<view>{{num}}</view>
</template>

<script>
	export default{
		data(){
			return{
				num: 10
			}
		},
		created() {
			uni.$on("updateNum",(res)=> {
				this.num += res;
			})
		}
		
	}
</script>

<style>
</style>
