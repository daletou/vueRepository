import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

// 创建对应的axios实例，每一个实例都有自己独立的配置
const instance1 = axios.create({
  baseURL: 'http://httpbin.org/',
  timeout: 5000,
})

instance1({
  url: 'post',
  method: 'post',
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

instance1({
  url: 'get',
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

const instance2 = axios.create({
  baseURL: 'http://httpbin.org/',
  timeout: 1000,
  headers: {},
})
