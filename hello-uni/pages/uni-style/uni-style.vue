<template>
	<view>
		样式的学习
		<view class="box1">
			测试文字
			<text>测试less样式</text>
		</view>
		<view class="iconfont">&#xec13;</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import url("./uni-style.css");
	.box1{
		height: 375rpx;
		width: 375rpx;
		background-color: #007AFF;
		font-size: 36rpx;
		color: #FFFFFF;
		
		text{
			color: hotpink;
		}
	}
</style>
