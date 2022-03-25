import {createStore} from 'vuex'

export default createStore({
  state: {
      students: [{
        onyen: 'john1',
        pid: 12345
      },
      {
        onyen: 'ale4man',
        pid: 23456
      },
      {
        onyen: 'notenrollstudent',
        pid: 11111
      },
      {
        onyen: 'lm23ter',
        pid: 34567
      }]
  },
  mutations: {
        DEL_STUDENT(state, index){
            state.students.splice(index,1)
        },
        EN_STUDENT(state, newVal){
            state.students.push(newVal)
        }
  },
  actions: {
      deleteStudent(store, index){
        store.commit('DEL_STUDENT', index)
      },
      enrollStudent(store, newVal){
            console.log(newVal)
          store.commit('EN_STUDENT', newVal)
      }
  },
  getters: {
      onyen: function(state, index){
          return`${state.students[index].onyen}`
      },
      pid: function(state, index){
          return `${state.students[index].pid}`
      }
  }
})