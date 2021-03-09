let name = '小明'
let high = 1.88
let flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30))
}

// 1、导出方式一
export { flag, sum }

// 2、导出方式二
export let num1 = 1000
export let height = 1.88

// 3、导出函数/类，也可以在上面将方法和类都定义好，再导出
export function mul(num1, num2) {
  return num1 * num2
}
export class Person {
  run() {
    console.log('奔跑')
  }
}

// 4、导出时不命名，让导入者自己命名(在同一个模块中，不允许同时存在多个)
export default function (argument) {
  console.log(argument)
}
