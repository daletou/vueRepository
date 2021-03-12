"use strict";

var _mathUtils = require("./js/mathUtils.js");

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./vue/App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 使用ES6的模块化规范
console.log((0, _mathUtils.add)(20, 30));
console.log((0, _mathUtils.mul)(20, 30)); // 使用CommonJs的模块化规范

var _require = require('./js/info.js'),
    name = _require.name,
    age = _require.age,
    high = _require.high;

console.log(name);
console.log(age);
console.log(high); // 依赖css文件

require('./css/normal.css'); // 使用vue进行开发


new _vue["default"]({
  el: '#app',
  template: '<App/>',
  components: {
    App: _App["default"]
  }
});