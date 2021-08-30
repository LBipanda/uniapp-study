<template>
	<view>
		<view class="news_item" v-for="(item,nIndex) in newsList" :key="nIndex" @click="navigator(item.id)">
			<image src="https://img2.baidu.com/it/u=1714089069,417006878&fm=26&fmt=auto&gp=0.jpg" mode=""></image>
			<view class="news_item_content">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			newsList: {
				type: Array,
				default: () => []
			}
		},
		methods:{
			navigator(id){
				this.$emit("itemClick",id)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid $shop-main-color;

		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;

		}

		.news_item_content {
			margin-left: 15rpx;

			.tit {
				font-size: 32rpx;
				margin-bottom: 30rpx;
			}

			.info {
				font-size: 16rpx;

				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
