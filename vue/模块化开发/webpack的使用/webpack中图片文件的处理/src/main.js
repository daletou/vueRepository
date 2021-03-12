// 使用ES6的模块化规范
import { add, mul } from './js/mathUtils.js'

console.log(add(20, 30))
console.log(mul(20, 30))

// 使用CommonJs的模块化规范
const { name, age, high } = require('./js/info.js')
console.log(name)
console.log(age)
console.log(high)

require('./css/normal.css')
