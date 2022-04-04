<template>
  <div class="main">
    <h2> New Multiple Choice Question</h2>
    <div class="quizTitle">
      <label for="quizT">Select Quiz Group for Question </label>
      <select v-model="qid" >
        <option v-for="quiz in quizzes" v-bind:value="quiz.qid" :key="quiz.qid">{{quiz.name}}</option>
      </select>
    </div>
    <div class="question">
      <h3>Question Info</h3>
      <div class="information">
        <n-tabs type="line">
          <n-tab-pane name="History and Physical" tab="History and Physical">
            <n-input v-model:value="histAndPhys" type="text" class="form-field" id="histAndPhys" name="histAndPhys" :input-props="{ type: 'clearable' }" placeholder="Enter History &amp; Physical Information" />
          </n-tab-pane>
          <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
            <n-input v-model:value="nurseNotes" type="text" class="form-field" id="nurseNotes" name="nurseNotes" :input-props="{ type: 'clearable' }" placeholder="Enter Nurse's Notes" />
          </n-tab-pane>
          <n-tab-pane name="Flow Sheet" tab="Flow Sheet"> 
            <n-input v-model:value="flowSheet" type="text" class="form-field" id="flowSheet" name="flowSheet" :input-props="{ type: 'clearable' }" placeholder="Enter Flow Sheet" />
          </n-tab-pane>
          <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
            <n-input v-model:value="labResults" type="text" class="form-field" id="labResults" name="labResults" :input-props="{ type: 'clearable' }" placeholder="Enter Labratory Results" />
          </n-tab-pane>
          <n-tab-pane name="Orders" tab="Orders">
            <n-input v-model:value="orders" type="text" class="form-field" id="orders" name="orders" :input-props="{ type: 'clearable' }" placeholder="Enter Orders" />
          </n-tab-pane>
        </n-tabs>
      </div>
      <h4>
        Question Text
      </h4>
      <n-input v-model:value="questText" type="text" class="form-field" id="questText" name="questText" :input-props="{ type: 'clearable' }" placeholder="Enter Question Text" />
      <div>
        <div class="answer">
          <input type="radio" value="1" v-model="answer" name="answerchoice"
            ><n-input v-model:value="answerText1" type="text" class="form-field" id="answerText1" name="answerText1" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 1" />
          
        </div>
        <div class="answer">
          <input type="radio" value="2" v-model="answer" name="answerchoice"
            ><n-input v-model:value="answerText2" type="text" class="form-field" id="answerText2" name="answerText2" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 2" />
          
        </div>
        <div class="answer">
          <input type="radio" value="3" v-model="answer" name="answerchoice"
            ><n-input v-model:value="answerText3" type="text" class="form-field" id="answerText3" name="answerText3" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 3" />
          
        </div>
        <div class="answer">
          <input type="radio" value="4" v-model="answer" name="answerchoice"
            ><n-input v-model:value="answerText4" type="text" class="form-field" id="answerText4" name="answerText4" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 4" />
          
        </div>
        <div class="answer">
          <input type="radio" value="5" v-model="answer" name="answerchoice"
            ><n-input v-model:value="answerText5" type="text" class="form-field" id="answerText5" name="answerText5" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 5" />
          
        </div>
      </div>
      <n-input v-model:value="rationale" type="text" class="form-field" id="rationale" name="rationale" :input-props="{ type: 'clearable' }" placeholder="Enter Rationale Text" />
      
    </div>

    <n-button size="large" @click="enterQuestion(qid, histAndPhys, nurseNotes, flowSheet, labResults, orders, questText, answer, answerText1, answerText2, answerText3, answerText4, answerText5, rationale)">Add Question</n-button>

  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NInput } from "naive-ui";
import {ref} from 'vue';

export default {
  name: "NewMultChoice",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NInput
  },
  setup() {
    return{
      qid: ref(null), 
      histAndPhys: ref(null), 
      nurseNotes: ref(null), 
      flowSheet: ref(null), 
      labResults: ref(null), 
      orders: ref(null), 
      questText: ref(null), 
      answer: ref(null), 
      answerText1: ref(null), 
      answerText2: ref(null), 
      answerText3: ref(null), 
      answerText4: ref(null), 
      answerText5: ref(null),
      rationale: ref(null)
    };
  },
  props: {
    quizzes: Array
  },
  methods: {
      enterQuestion() {
        var newQ = {"qid":this.qid, "histAndPhys": this.histAndPhys, "nurseNotes":this.nurseNotes, "flowSheet":this.flowSheet, "labResults":this.labResults, "orders":this.orders, "questText": this.questText, "correct":this.answer, "a1": this.answerText1, "a2": this.answerText2, "a3": this.answerText3, "a4": this.answerText4, "a5":this.answerText5, "rationale": this.rationale}
        console.log(newQ)
        this.$store.dispatch('newMult', newQ);
      }}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.information {
  border: 1px #808080 solid;
  padding: 35px;
  margin: 35px 0;
}
#quizTitle{
  margin-left:auto;
  margin-right:auto;
}
h2 {
  color: #fe4400;
}

.question {
  /* background-color: pink; */
  width: 75vw;
  text-align: left;
}

.answer {
  border: 1px #808080 solid;
  border-radius: 10px;
  margin: 0;
  margin-top: 10px;
}

.main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.n-checkbox,
.n-radio {
  padding: 15px;
}

.n-button {
  background-color: #ffc633;
  margin: 25px 0;
}
</style>
