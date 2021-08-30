const BASE_URL = "http://localhost:8082"

export const myRequest = (options) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL+options.url,
			method: options.method || "GET",
			data: options.data || {},
			success: (res) => {
				if(res.data.status === 0){
					resolve(res)
				}else{
					return uni.showToast({
						title: "网络异常"
					})
				}
			},
			fail: (err) => {
				return uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}