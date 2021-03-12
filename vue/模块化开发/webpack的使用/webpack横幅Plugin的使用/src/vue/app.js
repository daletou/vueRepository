export default {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">按钮</button>
    </div>
  `,
  data() {
    return {
      message: '你好，哈哈哈',
    }
  },
  methods: {
    btnClick() {
      console.log('我被点击了')
    },
  },
}
