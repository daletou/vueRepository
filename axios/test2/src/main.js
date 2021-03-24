import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

// 调用封装好的request模块
import { request } from './network/request'

// request(
//   {
//     url: 'post',
//     method: 'post',
//   },
//   (res) => console.log(res),
//   (err) => console.log(err)
// )

request({
  url: 'get',
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
