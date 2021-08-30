<template>
	<view>
		<view>
			<text selectable>唱歌跳舞打篮球</text>
		</view>
		<view>
			<text space="ensp">唱歌    跳舞打篮球</text>
		</view>
		<view>
			<text space="emsp">唱歌    跳舞打篮球</text>
		</view>
		
		<view class="box" hover-class="box-active"></view>
		
		<button>按钮</button>
		<button size="mini">按钮</button>
		<button type="primary">按钮</button>
		<button type="warn" plain>按钮</button>
		<button type="primary" disabled>按钮</button>
		
		<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190624%2F14%2F1561357439-pKdiDUtJMr.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632219291&t=85eb336163e66b702df980c0f798d661"></image>
		<image mode="aspectFill" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190624%2F14%2F1561357439-pKdiDUtJMr.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632219291&t=85eb336163e66b702df980c0f798d661"></image>
		<image mode="aspectFit" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190624%2F14%2F1561357439-pKdiDUtJMr.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632219291&t=85eb336163e66b702df980c0f798d661"></image>
		
	</view>
</template>

<script>
	export default{
		onLoad(options){
			console.log(options)
		}
	}
</script>

<style>
	.box{
		width: 100px;
		height: 100px;
		background-color: #007AFF;
	}
	.box-active{
		width: 100px;
		height: 100px;
		background-color: #4CD964;
	}
</style>
