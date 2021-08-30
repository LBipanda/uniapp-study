<template>
	<view class="goods">
		<GoodsListCom :goodsList="goodsList" :listFlag="listFlag" @goodsItemClick="toGoodsDeatil" />
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
				pageindex: 1,
				listFlag: false,
				goodsList: [],
			}
		},
		onLoad(){
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
			async getGoodsList(callback) {
				const res = await this.$myRequest({
					url: "/api/getgoods?pageindex=" + this.pageindex
				})
				this.pageindex++
				if(res.data.message.length< 10){
					this.listFlag = true;
				}
				this.goodsList = [...this.goodsList,...res.data.message]
				callback && callback()
			},
			toGoodsDeatil(id){
				uni.navigateTo({
					url: "/pages/goods-detail/goods-detail?id="+id
				})
			}
		}
	}
</script>

<style>
	.goods{
		background-color: #ccc;
	}
</style>
