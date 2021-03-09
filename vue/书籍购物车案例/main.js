const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        name: '《算法导论》',
        pubDate: '2006-9',
        price: 85.01,
        count: 1,
      },
      {
        name: '《UNIX变成艺术》',
        pubDate: '2006-2',
        price: 59.0,
        count: 1,
      },
      {
        name: '《编程珠玑》',
        pubDate: '2008-10',
        price: 39.0,
        count: 1,
      },
      {
        name: '《代码大全》',
        pubDate: '2006-3',
        price: 128.0,
        count: 1,
      },
    ],
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      for (book of this.books) {
        totalPrice += book.price * book.count
      }
      return totalPrice
    },
  },
  // 过滤器
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2)
    },
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    },
  },
})
