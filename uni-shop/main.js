import App from './App'
import Vue from 'vue'
import message from './utils/message'
import { myRequest } from "utils/api.js"
import "./static/iconfont/iconfont.scss"

Vue.config.productionTip = false
// Vue.prototype.$message = message
Vue.prototype.$myRequest = myRequest

Vue.filter("formatDate",(val) => {
	const date = new Date(val)
	let year = date.getFullYear()
	let month = (date.getMonth()+1).toString().padStart(2,0)
	let day = date.getDate().toString().padStart(2,0)
	return year+"-"+month+"-"+day
})

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif