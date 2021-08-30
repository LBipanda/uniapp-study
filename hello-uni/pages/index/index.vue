<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<test></test>
		<testA></testA>
		<testB></testB>
		<uni-calendar 
		    ref="calendar"
		    :insert="false"
		    @confirm="confirm"
		     />
		     <button @click="open">打开日历</button>
	</view>
</template>

<script>
	import test from "../../components/Test/index.vue"
	import a from "../../components/Test/a.vue"
	import b from "../../components/Test/b.vue"
	export default {
		components:{
			test,
			testA: a,
			testB: b
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad(options) {
			console.log('页面加载了',options)
		},
		onShow(){
			console.log("页面显示了")
		},
		onReady() {
			console.log("页面初次渲染完成了")
		},
		onHide() {
			console.log("页面隐藏了")
		},
		methods: {
			sendHttp(){
				uni.request({
					 url: 'localhost:3000/api/users/login', //仅为示例，并非真实接口地址。
					    data: {
					        "user": {
					                "email": "111111@163.com",
					                "password": "111111"
					            }
					    },
					    success: (res) => {
					        console.log(res.data);
					        this.text = 'request success';
					    }
				})
			},
			 open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				console.log(e);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
