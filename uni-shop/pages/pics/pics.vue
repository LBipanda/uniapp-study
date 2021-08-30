<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="pics_left">
			<view v-for="(menu,mIndex) in menuList" :key="mIndex" @click="menuHandler(mIndex,menu)" :class="{'active': active === mIndex}">{{menu.title}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="pics_right">
			<view class="pics_right_item" v-for="(item,iIndex) in secondData" :key="iIndex">
				<image src="https://img2.baidu.com/it/u=1714089069,417006878&fm=26&fmt=auto&gp=0.jpg" @click="previewImg(iIndex)"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuList: [],
				active: 0,
				secondData: []
			}
		},
		onLoad() {
			this.getMenu();
		},
		methods: {
			async getMenu(){
				const res = await this.$myRequest({
					url: "/api/getimgcategory"
				})
				this.menuList = res.data.message
				this.menuHandler(0,this.menuList[0])
			},
			async menuHandler(index,menu){
				this.active = index
				// 获取右边区域数据
				const res = await this.$myRequest({
					url: "/api/getimages/"+menu.id
				})
				this.secondData = res.data.message
			},
			previewImg(current){
				let urlList = this.secondData.map((item,index) =>{
					return 'https://img2.baidu.com/it/u=1714089069,417006878&fm=26&fmt=auto&gp=0.jpg'
				})
				uni.previewImage({
					urls: urlList,
					current
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.pics{
	height: 100vh;
	display: flex;
	.pics_left{
		height: 100%;
		width: 200rpx;
		border: 1rpx solid #eee;
		
		view{
			height: 120rpx;
			line-height: 120rpx;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1rpx solid #eee;
		}
		.active{
			background-color: $shop-main-color;
			color: #fff;
		}
	}
	.pics_right{
		width: 530rpx;
		margin: 10rpx auto;
		
		.pics_right_item{
			border-bottom: 1rpx solid #ccc;
			margin-top: 10rpx;
			image{
				width: 520rpx;
				height: 520rpx;
				border-radius: 10rpx;
			}
			text{
				font-size: 30rpx;
				line-height: 50rpx;
			}
		}
	}
}
</style>
