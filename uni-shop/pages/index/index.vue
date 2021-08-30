<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper :indicator-dots="indicatorDots" circular :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item class="swiper" v-for="(item,index) in swiperList" :key="index">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(icn,iIndex) in iconList" :key="iIndex" @click="toPages(icn.path)">
				<view :class="icn.iconName"></view>
				<text>{{icn.name}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="goods">
			<view class="title">推荐商品</view>
			<GoodsListCom :goodsList="goodsList" :listFlag="listFlag" @goodsItemClick="toGoodsDeatil" />
		</view>
	</view>
</template>

<script>
	import GoodsListCom from "../../components/GoodsList/index.vue"
	export default {
		components:{
			GoodsListCom
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				swiperList: [],
				goodsList: [],
				pageindex: 1,
				listFlag: false,
				iconList: [{
						name: "超市购物",
						iconName: "iconfont icon-ziyuan",
						path: "/pages/goods/goods"
					},
					{
						name: "联系我们",
						iconName: "iconfont icon-guanyuwomen",
						path: "/pages/contact/contact"
					},
					{
						name: "社区图片",
						iconName: "iconfont icon-tupian",
						path: "/pages/pics/pics"
					},
					{
						name: "学习视频",
						iconName: "iconfont icon-shipin",
						path: "/pages/videos/videos"
					},

				]
			}
		},
		onLoad() {
			this.getSwiperList()
			this.getGoodsList()
		},
		onPullDownRefresh(){//下拉刷新
			this.pageindex = 1
			this.listFlag = false
			this.goodsList = []
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		},
		onReachBottom() {//上拉加载
			this.getGoodsList()
		},
		methods: {
			// 获取轮播图
			async getSwiperList() {
				const res = await this.$myRequest({
					url: "/api/getlunbo"
				})
				this.swiperList = res.data.message
			},
			// 获取商品列表
			async getGoodsList(callback) {
				const res = await this.$myRequest({
					url: "/api/getgoods?pageindex="+ this.pageindex
				})
				this.pageindex++;
				if(res.data.message.length< 10){
					this.listFlag = true;
				}
				this.goodsList = [...this.goodsList,...res.data.message]
				callback && callback()
			},
			// 跳转到nav页面
			toPages(url) {
				uni.navigateTo({
					url
				})
			},
			toGoodsDeatil(id){
				console.log(id)
				uni.navigateTo({
					url: "/pages/goods-detail/goods-detail?id="+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		background-color: #ccc;

		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

		//导航栏
		.nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: #fff;

			.nav-item {
				text-align: center;
				padding-bottom: 10rpx;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-main-color;
					border-radius: 50%;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		// 推荐商品
		.goods {
			padding: 5rpx 0;

			.title {
				background-color: #fff;
				height: 100rpx;
				line-height: 100rpx;
				color: $shop-main-color;
				text-align: center;
				letter-spacing: 40rpx;
			}

		}
	}
</style>
