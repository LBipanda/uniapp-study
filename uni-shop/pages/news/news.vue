<template>
	<view class="news">
		<NewsItem :newsList="newsList" @itemClick="goDeatil"></NewsItem>
	</view>
</template>

<script>
	import NewsItem from "../../components/NewsItem/index.vue"
	export default {
		components: {
			NewsItem
		},
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: "/api/getnewslist"
				})
				console.log(res)
				this.newsList = res.data.message
			},
			goDeatil(id){
				uni.navigateTo({
					url:"/pages/news-detail/news-detail?id="+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news {}
</style>
