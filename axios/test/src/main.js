import Vue from 'vue'
import App from './App.vue'

// 一、使用全局的axios和对应的配置在进行网络请求
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

// 全局配置
axios.defaults.baseURL = 'http://httpbin.org/'

// axios API
// 1、 可以通过向 axios 传递相关配置来创建请求
axios({
  method: 'post',
  url: 'post',
  // 如果是post请求，传递参数用data
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
  // 如果是get请求，传递参数用params
  params: {
    id: '001',
  },
}).then((res) => {
  console.log(res)
})

// 2、执行 GET 请求
axios
  .get('get')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(res)
  })

// 3、执行 POST 请求
axios
  .post('http://httpbin.org/post')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// 4、执行多个并发请求
axios
  .all([
    axios({
      method: 'get',
      url: 'get',
    }),
    axios({
      method: 'post',
      url: 'post',
    }),
  ])
  // （1）两个请求都执行完成，返回的results是两个请求返回结果的集合
  .then((results) => {
    console.log(results)
    console.log(results[0])
    console.log(results[1])
  })
// （2）两个请求都执行完成，可以使用axios.spread将数组[res1, res2]展开为res1, res2
// .then(
//   axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
//   })
// )
