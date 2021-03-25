import { INCREMENT } from './mutations-types'

export default {
  [INCREMENT](state) {
    state.count++
  },
  decrement(state) {
    state.count++
  },
  incrementCount(state, count) {
    state.count += count
  },
  addStudent(stata, student) {
    console.log(student)
    stata.students.push(student)
  },
  updateInfo(state) {
    state.info.name = 'coderwhy'
  },
}
