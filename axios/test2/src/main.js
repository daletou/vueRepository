import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

// const instance1 = axios.create({
//   baseURL:
//     'http://192.168.163.210:8090/IPMS_PublicService/cmscp/neusoft/majordepartment/list ',
//   timeout: 1000,
//   method: 'post',
//   data: {
//     departmentName: 'aaa',
//     areaName: 'bbb',
//     approvalStatus: 1,
//     start: 0,
//     size: 10,
//   },
// })

// instance1({
//   url: 'post',
// }).then((res) => {
//   console.log(res)
// })
;(axios.defaults.baseURL = '/api'),
  axios({
    url: '/',
    method: 'post',
    data: {
      departmentName: 'aaa',
      areaName: 'bbb',
      approvalStatus: 1,
      start: 0,
      size: 10,
    },
  }).then((res) => {
    console.log(res)
  })
