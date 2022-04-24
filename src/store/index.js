import { createStore } from "vuex";

export default createStore({
    state: {
        signedIn: false,
        user: {
            uid: "",
            jwt: "",
            name: "",
            email: "",
            userType: "",
            onyen: "",
        },
        score: 0, // holds the current score as you traverse the quiz
        isSubmitted: false, // if the submit button is clicked
        correct: "incorrect", // text to display for rationale
        quizLength: 1, // Length of the quiz selected
        numOfCorrectAnswers: 0, // holds the current number of correct answers as you traverse the quiz
        currentIndex: 0, // starts out at 0 because 0th index is 1st question
        currentQid: 0,
        currentQuizTitle: "", // title of the current quiz
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
        SET_ONYEN(state, onyen) {
            state.user.onyen = onyen;
        },
        SET_USER_TYPE(state, userType) {
            state.user.userType = userType;
        },
        DEL_STUDENT(state, index) {
            state.students.splice(index, 1);
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
        UPDATE_SCORE(state) {
            state.score = (state.numOfCorrectAnswers / state.quizLength) * 100;
        },
        RESET_QUIZ(state) {
            state.score = 0;
            state.isSubmitted = false;
            state.correct = "incorrect";
            state.quizLength = 1;
            state.numOfCorrectAnswers = 0;
            state.currentIndex = 0;
            state.currentQid = 0;
            state.currentQuizTitle = "";
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
        setUserType(store, userType) {
            store.commit("SET_USER_TYPE", userType);
        },
        setOnyen(store, onyen) {
            store.commit("SET_ONYEN", onyen);
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
