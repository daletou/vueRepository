// 使用ES6的模块化规范
import { add, mul } from './js/mathUtils.js'

console.log(add(20, 30))
console.log(mul(20, 30))

// 使用CommonJs的模块化规范
const { name, age, high } = require('./js/info.js')
console.log(name)
console.log(age)
console.log(high)

// 依赖css文件
require('./css/normal.css')

// 使用vue进行开发
import Vue from 'vue'
// new Vue({
//   el: '#app',
//   template: `
//     <div>
//       <h2>{{message}}</h2>
//       <button @click="btnClick">按钮</button>
//     </div>
//   `,
//   data: {
//     message: '你好，哈哈哈',
//   },
//   methods: {
//     btnClick() {
//       console.log('我被点击了')
//     },
//   },
// })
// 导入app.js
// import App from './vue/app'
// 导入vue
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
})
