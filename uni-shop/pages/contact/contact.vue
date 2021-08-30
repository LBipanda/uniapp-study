<template>
	<view class="contact">
			<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" class="img"></image>
			<view class="contact_info">
				<view @click="phone">联系电话:400-618-9090 (点击拨打)</view>
				<view>地址:广东省惠州市惠城区鹅岭南路TCL工业大厦（TCL股份有限公司）</view>
			</view>
			<map class="map" :latitude="latitude" :scale="scale" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 114.400697,
				latitude: 23.083517,
				scale: 13,
				markers: [
					{
						longitude: 114.400697,
						latitude: 23.083517,
						iconPath: "../../static/icon/news-active.png",
						width: 30,
						height: 30
					}
				],
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber: 400-618-9090
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.contact{
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.contact_info{
		padding: 10rpx 30rpx;
		view{
			line-height: 60rpx;
			border-bottom: 1rpx solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
