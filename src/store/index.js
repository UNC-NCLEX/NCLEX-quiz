import { createStore } from "vuex";

export default createStore({
  state: {
    signedIn: false,
    user: {
      uid: "",
      jwt: "",
      name: "",
      email: ""
    },
    score: 0, // holds the current score as you traverse the quiz
    isSubmitted: false, // if the submit button is clicked
    correct: "incorrect", // text to display for rationale
    quizLength: 1, // Length of the quiz selected
    numOfCorrectAnswers: 0, // holds the current number of correct answers as you traverse the quiz
    currentIndex: 0, // starts out at 0 because 0th index is 1st question
    currentQid: 0,
    currentQuizTitle: "", // title of the current quiz
    students: [
      {
          onyen: "john1",
          pid: 12345,
      },
      {
          onyen: "ale4man",
          pid: 23456,
      },
      {
          onyen: "enrollstudent",
          pid: 11111,
      },
      {
          onyen: "lm23ter",
          pid: 34567,
      },
    ],
    selectAll: [
      {
        qid: 1,
        xid: 2,
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
        rationale: "this is my rationale",
      },
    ],
    dropDownSentence: [
      {
        qid: 1,
        xid: 3,
        histAndPhys: "ex hist + phys",
        nurseNotes: "ex nurse notes",
        flowSheet: "ex flow sheet",
        labResults: "ex lab results",
        orders: "ex orders",
        questionp1: "question text for multiple choice part 1",
        p1choices: [
          "choice 1 for first part",
          "second choice for first part",
          "third choice for first part",
        ],
        p1correct: 1,
        questionp2: "part 2 question text for multiple choice",
        p2choices: [
          "choice 1 for 2nd part",
          "second choice for 2nd part",
          "third choice for 2nd part",
        ],
        p2correct: 3,
        questionp3: "part 3 question text for multiple choice",
        p3choices: [
          "choice 1 for 3rd part",
          "second choice for 3rd part",
          "third choice for 3rd part",
        ],
        p3correct: 2,
        rationale: "this is my reasoning",
      },
    ],
    p3correct: 2,
    rationale: "this is my reasoning",
  },
  mutations: {
    SIGN_IN(state) {
      state.signedIn = true;
    },
    SIGN_OUT(state) {
      state.signedIn = false;
    },
    CLEAR_USER(state) {
      state.user.uid = "";
      state.user.jwt = "";
      state.user.name = "";
      state.user.email = "";
    },
    SET_UID(state, uid) {
      state.user.uid = uid;
    },
    SET_JWT(state, jwt) {
      state.user.jwt = jwt;
    },
    SET_NAME(state, name) {
      state.user.name = name;
    },
    SET_EMAIL(state, email) {
      state.user.email = email;
    },
    DEL_STUDENT(state, index) {
      state.students.splice(index, 1);
    },
    mutations: {
      UPDATE_SCORE(state) {
          state.score = (state.numOfCorrectAnswers / state.quizLength) * 100;
      },
      DEL_STUDENT(state, index) {
          state.students.splice(index, 1);
      },
      EN_STUDENT(state, newVal) {
          state.students.push(newVal);
      },
      MULT_ADD(state, newQ) {
          state.multChoice.push(newQ);
      },
      SEL_ADD(state, newQ) {
          state.selectAll.push(newQ);
      },
      QUIZ_SELECT(state, qid) {
          state.currentQid = qid;
      },
      INC_QUESTION(state) {
          state.currentIndex = state.currentIndex + 1;
      },
      DDS_ADD(state, newQ) {
          state.dropDownSentence.push(newQ);
      },
    },
    actions: {
      deleteStudent(store, index) {
          store.commit("DEL_STUDENT", index);
      },
      enrollStudent(store, newVal) {
          store.commit("EN_STUDENT", newVal);
      },
      newMult(store, newQ) {
          store.commit("MULT_ADD", newQ);
      },
      newSel(store, newQ) {
          store.commit("SEL_ADD", newQ);
      },
      selectQuiz(store, qid) {
          store.commit("QUIZ_SELECT", qid);
      },
      nextQuestion(store) {
          store.commit("INC_QUESTION");
      },
      newDDS(store, newQ) {
          store.commit("DDS_ADD", newQ);
      },
    },
    getters: {
      onyen: function (state, index) {
          return `${state.students[index].onyen}`;
      },
      pid: function (state, index) {
          return `${state.students[index].pid}`;
      },
      quizTitlefromID: function (state, index) {
          return `${state.quizzes[index - 1].name}`;
      },
      questionNext: function (state) {
          var quiz = state.quizzes;
          var quizTitle = quiz[state.currentQid - 1].name;
          var toEx = quizTitle.concat("[", state.currentXid - 1, "].type");
          toEx = "state.".concat(toEx);
          var tableSearch = eval(toEx);
          var nextQ = eval(
              "state.".concat(quizTitle, "[", state.currentXid - 1, "].xid")
          );
          console.log(nextQ);
          var toRet;
          var exe = "for(var i=0; i<state.".concat(
              tableSearch,
              ".length; i++){ if(state.",
              tableSearch,
              "[i].xid===",
              nextQ,
              "){toRet=state.",
              tableSearch,
              "[i];} else {toRet=0;}}"
          );
          eval(exe);
          const target_copy = Object.assign({}, toRet);
          console.log(target_copy);
          return target_copy;
      },
      multByXID: function (state, id) {
          return `${state.multChoice[id - 1]}`;
      },
    },
    QUIZ_SELECT(state, qid) {
      state.currentQid = qid;
    },
    INC_QUESTION(state) {
      state.currentQid = state.currentQid + 1;
    },
    DDS_ADD(state, newQ) {
      state.dropDownSentence.push(newQ);
    },
  },
  actions: {
    signIn(store) {
      store.commit("SIGN_IN");
    },
    signOut(store) {
      store.commit("SIGN_OUT");
    },
    clearUser(store) {
      store.commit("CLEAR_USER");
    },
    setUID(store, uid) {
      store.commit("SET_UID", uid);
    },
    setJWT(store, jwt) {
      store.commit("SET_JWT", jwt);
    },
    setName(store, name) {
      store.commit("SET_NAME", name);
    },
    setEmail(store, email) {
      store.commit("SET_EMAIL", email);
    },
    deleteStudent(store, index) {
      store.commit("DEL_STUDENT", index);
    },
    enrollStudent(store, newVal) {
      store.commit("EN_STUDENT", newVal);
    },
    newMult(store, newQ) {
      store.commit("MULT_ADD", newQ);
    },
    newSel(store, newQ) {
      store.commit("SEL_ADD", newQ);
    },
    selectQuiz(store, qid) {
      store.commit("QUIZ_SELECT", qid);
    },
    nextQuestion(store) {
      store.commit("INC_QUESTION");
    },
    newDDS(store, newQ) {
      store.commit("DDS_ADD", newQ);
    },
  },
  getters: {
    isSignedIn: function (state) {
      return `${state.signedIn}`;
    },
    onyen: function (state, index) {
      return `${state.students[index].onyen}`;
    },
    pid: function (state, index) {
      return `${state.students[index].pid}`;
    },
    quizTitlefromID: function (state, index) {
      return `${state.quizzes[index - 1].name}`;
    },
    questionNext: function (state) {
      var quiz = state.quizzes;
      var quizTitle = quiz[state.currentQid - 1].name;
      var toEx = quizTitle.concat("[", state.currentXid - 1, "].type");
      toEx = "state.".concat(toEx);
      var tableSearch = eval(toEx);
      var nextQ = eval(
        "state.".concat(quizTitle, "[", state.currentXid - 1, "].xid")
      );
      console.log(nextQ);
      var toRet;
      var exe = "for(var i=0; i<state.".concat(
        tableSearch,
        ".length; i++){ if(state.",
        tableSearch,
        "[i].xid===",
        nextQ,
        "){toRet=state.",
        tableSearch,
        "[i];} else {toRet=0;}}"
      );
      eval(exe);
      const target_copy = Object.assign({}, toRet);
      console.log(target_copy);
      return target_copy;
    },
    multByXID: function (state, id) {
      return `${state.multChoice[id - 1]}`;
    },
  },
});
