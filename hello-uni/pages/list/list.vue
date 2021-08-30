<template>
	<view>
		这是列表页
		<button type="default" @click="setStore">存储数据</button>
		<button type="default" @click="getStore">获取数据</button>
		<button type="default" @click="removeStore">移除数据</button>
		<view v-for="(item,index) in list" :key="index" class="box">{{item}}</view>
		<button type="default" @click="refreshData">下拉刷新</button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				list:["UI","前端","后端","大数据","运维","前端","后端"]
			}
		},
		onPullDownRefresh(){
			console.log("触发了下拉刷新")
			this.list = ["aaa","bbb","ccc","ddd"]
			uni.startPullDownRefresh()
		},
		onReachBottom(){
			console.log("下拉加载")
			this.list = [...this.list,...["aaa","bbb","ccc","ddd"]]
		},
		methods:{
			refreshData(){
				uni.startPullDownRefresh()
			},
			setStore(){
				// uni.setStorage({
				// 	key: 'id',
				// 	data: 100,
				// 	success () {
				// 		console.log('存储成功')
				// 	}
				//  })
				uni.setStorageSync("id",100)
			},
			getStore(){
				// uni.getStorage({
				// 	key: 'id',
				// 	success:  res=>{
				// 		console.log(res)
				// 	}
				// })
				console.log(uni.getStorageSync("id"))
			},
			removeStore(){
				// uni.removeStorage({
				// 	key: 'id',
				// 	success: function () {
				// 		console.log('删除成功')
				// 	}
				// })
				uni.removeStorageSync("id")
			}
		}
	}
</script>

<style>
	.box{
		height: 150px;
		line-height: 150px;
	}
</style>
