<template>
	<view>
		<view>导航跳转学习</view>
		<view class="title">声明式导航</view>
		<navigator url="../detail/detail?id=80&age22">跳转至详情页</navigator>
		<navigator url="../message/message" open-type="switchTab">跳转至信息页</navigator>
		<navigator url="../detail/detail" open-type="redirect">跳转至详情页</navigator>
		
		<view class="title">编程式导航</view>
		<button type="default" @click="goDetail">跳转详情页</button>
		<button type="default" @click="goMessage">跳转至信息页</button>
		<button type="default" @click="goDetailClose">跳转详情页并关闭当前页</button>
	</view>
</template>

<script>
	export default{
		onUnload() {
			console.log("导航页面卸载了")
		},
		methods:{
			goDetail(){
				uni.navigateTo({
					url: "../detail/detail?id=11&age=33"
				})
			},
			goMessage(){
				uni.switchTab({
					url: "../message/message",
				})
			},
			goDetailClose(){
				uni.redirectTo({
					url:"../detail/detail"
				})
			}
		}
		
	}
</script>

<style>
	.title{
		margin: 20px 10px;
	}
</style>
