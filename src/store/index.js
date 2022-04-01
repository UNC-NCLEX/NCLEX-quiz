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
        onyen: 'enrollstudent',
        pid: 11111
      },
      {
        onyen: 'lm23ter',
        pid: 34567
      }],
      quizzes: [
        {
          qid: 1,
          name: "Unit 1",
        },
        {
          qid: 2,
          name: "Unit 2",
        },
        {
          qid: 3,
          name: "Unit 3",
        },
      ],
      multChoice: [
        {qid:1,
          xid: 1,
          histAndPhys: "ex hist + phys",
          nurseNotes: "ex nurse notes",
          flowSheet: "ex flow sheet",
          labResults: "ex lab results",
          orders: "ex orders",
          questText: "question text for multiple choice",
          answer: "1",
          a1: "answer choice 1 text",
          a2: "answer choice 2 text",
          a3: "answer choice 3 text",
          a4: "answer choice 4 text",
          a5: "answer choice 5 text",
          rationale: "this is my rationale"
        }
      ],
      selectAll: [
        {qid:1,
          histAndPhys: "ex hist + phys",
          nurseNotes: "ex nurse notes",
          flowSheet: "ex flow sheet",
          labResults: "ex lab results",
          orders: "ex orders",
          questText: "question text for multiple choice",
          a1: "answer choice 1 text",
          a1Correct: true,
          a2: "answer choice 2 text",
          a2Correct: true,
          a3: "answer choice 3 text",
          a3Correct: false,
          a4: "answer choice 4 text",
          a4Correct: false,
          a5: "answer choice 5 text",
          a5Correct: false,
          a6: "answer choice 6 text",
          a6Correct: true,
          rationale: "this is my rationale"
        }
      ]
  },
  mutations: {
        DEL_STUDENT(state, index){
          state.students.splice(index,1)
        },
        EN_STUDENT(state, newVal){
          state.students.push(newVal)
        },
        MULT_ADD(state, newQ){
          state.multChoice.push(newQ)
        },
        SEL_ADD(state, newQ){
          state.selectAll.push(newQ)
        }
  },
  actions: {
      deleteStudent(store, index){
        store.commit('DEL_STUDENT', index)
      },
      enrollStudent(store, newVal){
        store.commit('EN_STUDENT', newVal)
      },
      newMult(store, newQ){
        store.commit('MULT_ADD', newQ)
      },
      newSel(store, newQ){
        store.commit("SEL_ADD", newQ)
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