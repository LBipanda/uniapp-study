<template>
	<view>
		uni-app中的数据绑定
		<view>{{msg}}</view>
		<view>{{1+"你好"}}</view>
		<view>{{1+1}}</view>
		<view>{{flag?"这是真的":"这是假的"}}</view>
		
		<image :src="imgSrc" mode=""></image>
		
		<view v-for="(user,index) in userList" :key="index">
			名字：{{user.name}}, 年龄{{user.age}}
		</view>
		
		<button type="default" @click="handler(22,$event)">绑定事件</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				msg: "hello uniapp",
				flag: true,
				imgSrc: "https://img1.baidu.com/it/u=3025065027,2624797889&fm=26&fmt=auto&gp=0.jpg",
				userList: [
					{ name: "张三", age: 18 },
					{ name: "李四", age: 22 },
					{ name: "王五", age: 25 }
				]
			}
		},
		methods:{
			handler(num,event){
				console.log(num,event)
			}
		}
	}
</script>

<style>
</style>
