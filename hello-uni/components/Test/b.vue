<template>
	<view>
		这是b组件
		<button type="default" @click="handler">给兄弟组件传值</button>
	</view>
</template>

<script>
	export default{
		methods:{
			handler(){
				uni.$emit("updateNum",10)
			}
		}
	}
</script>

<style>
</style>
