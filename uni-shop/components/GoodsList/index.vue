<template>
	<view>
		<view class="goods_list">
			<view class="goods_item" v-for="(good,gIndex) in goodsList" :key="gIndex" @click="navigator(good.id)">
				<image src="https://img1.baidu.com/it/u=311013799,3865900083&fm=26&fmt=auto&gp=0.jpg" mode=""></image>
				<view class="goods_price">
					<text>￥{{good.sell_price}}</text>
					<text>￥{{good.market_price}}</text>
				</view>
				<view class="goods_name">{{good.title}}</view>
			</view>
		</view>
		<view class="over" v-if="listFlag">
				-----我真的没了-----
		</view>
	</view>
	
</template>

<script>
	export default{
		props:{
			goodsList:{
				type: Array,
				default: () => []
			},
			listFlag:{
				type: Boolean,
				default: false
			}
		},
		// props:["goodsList"]
		methods:{
			navigator(id){
				this.$emit("goodsItemClick", id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods_list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 15rpx;
	
		.goods_item {
			background-color: #fff;
			width: 355rpx;
			margin: 10rpx 0;
	
			image {
				padding-top: 4rpx;
				width: 80%;
				height: 300rpx;
				display: block;
				margin: auto;
			}
	
			.goods_price {
				color: $shop-main-color;
				font-size: 36rpx;
				padding-left: 15rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 18rpx;
					text-decoration: line-through;
				}
			}
			.goods_name{
				font-size: 28rpx;
				line-height: 40rpx;
				padding: 0 25rpx 5rpx 15rpx;
				white-space: normal;
			}
		}
	}
	.over{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 32rpx;
		text-align: center;
	}
</style>
