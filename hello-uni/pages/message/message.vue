<template>
	<view>
		hello-uni
		<button type="default" @click="chooseImg">上传图片</button>
		<image v-for="(img,index) in imgList" :src="img" @click="previewImg(index)" :key="index"></image>
		
		<!-- #ifdef H5 -->
		<view>我希望只在h5页面中生效</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view>我希望只在小程序页面中生效</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default{
		data(){
			return {
				imgList: []
			}
		},
		onLoad(){
			// #ifdef H5
			console.log("我希望只在h5页面中打印")
			//#endif
			// #ifdef MP-WEIXIN
			console.log("我希望只在小程序页面中打印")
			//#endif
		},
		methods:{
			chooseImg(){
				uni.chooseImage({
					count: 5,
					success: (res)=> {
						console.log(res)
						this.imgList = res.tempFilePaths
					}
				})
			},
			previewImg(current){
				uni.previewImage({
					current,
					urls: this.imgList
				})
				
			}
		}
	}
</script>

<style>
	/* #ifdef H5 */
	view{
		color: hotpink;
	}
	/* #endif */
	/* #ifdef MP-WEIXIN */
	view{
		color: yellowgreen;
	}
	/* #endif */
</style>
