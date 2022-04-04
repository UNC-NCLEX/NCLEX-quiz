<template>
  <div class="container">
    <div class="header">
      <h1>Pharmacoloy &amp; Pathophysiology</h1>
      <p>Interactive tool to help you learn</p>
    </div>
    <h2>New Drop Down Sentence Question</h2>
        <div class="quizTitle">
      <label for="quizT">Select Quiz Group for Question </label>
      <select v-model="qid" >
        <option v-for="quiz in quizzes" v-bind:value="quiz.qid" :key="quiz.qid">{{quiz.name}}</option>
      </select>
    </div>
    <div class="question">
      <h3>Question</h3>
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
        Choose the most likely options for the information missing from the
        statements regarding absorption of intravenous medications by selecting
        from the list of options provided.
      </h4>
      <div>
        <tr>
          <h4 class="questions"><n-input v-model:value="questionp1" type="text" class="form-field" id="answerText1" name="answerText1" :input-props="{ type: 'clearable' }" placeholder="Enter Question Sentence 1" />...</h4>
          <td>
            <n-space vertical>
        <div class="answer">
          <input type="radio" value="1" v-model="p1correct" name="answerchoice1"
            ><n-input v-model:value="p1c1" type="text" class="form-field" id="answerText1" name="answerText1" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 1 for Question 1" />
          
        </div>
        <div class="answer">
          <input type="radio" value="2" v-model="p1correct" name="answerchoice1"
            ><n-input v-model:value="p1c2" type="text" class="form-field" id="answerText2" name="answerText2" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 2 for Question 1" />
          
        </div>
        <div class="answer">
          <input type="radio" value="3" v-model="p1correct" name="answerchoice1"
            ><n-input v-model:value="p1c3" type="text" class="form-field" id="answerText3" name="answerText3" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 3 for Question 1" />
        </div>
            </n-space>
          </td>
        </tr>
        <tr>
          <h4 class="questions"><n-input v-model:value="questionp2" type="text" class="form-field" id="answerText1" name="answerText1" :input-props="{ type: 'clearable' }" placeholder="Enter Question Sentence 2" />...</h4>
          <td>
            <n-space vertical>
        <div class="answer">
          <input type="radio" value="1" v-model="p2correct" name="answerchoice2"
            ><n-input v-model:value="p2c1" type="text" class="form-field" id="answerText1" name="answerText1" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 1 for Question 2" />
          
        </div>
        <div class="answer">
          <input type="radio" value="2" v-model="p2correct" name="answerchoice2"
            ><n-input v-model:value="p2c2" type="text" class="form-field" id="answerText2" name="answerText2" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 2 for Question 2" />
          
        </div>
        <div class="answer">
          <input type="radio" value="3" v-model="p2correct" name="answerchoice2"
            ><n-input v-model:value="p2c3" type="text" class="form-field" id="answerText3" name="answerText3" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 3 for Question 2" />
        </div>
              </n-space>
          </td>
        </tr>
        <tr>
          <h4 class="questions"><n-input v-model:value="questionp3" type="text" class="form-field" id="answerText1" name="answerText1" :input-props="{ type: 'clearable' }" placeholder="Enter Question Sentence 3" />...</h4>
          <td>
            <n-space vertical>
        <div class="answer">
          <input type="radio" value="1" v-model="p3correct" name="answerchoice3"
            ><n-input v-model:value="p3c1" type="text" class="form-field" id="answerText1" name="answerText1" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 1 for Question 3" />
          
        </div>
        <div class="answer">
          <input type="radio" value="2" v-model="p3correct" name="answerchoice3"
            ><n-input v-model:value="p3c2" type="text" class="form-field" id="answerText2" name="answerText2" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 2 for Question 3" />
          
        </div>
        <div class="answer">
          <input type="radio" value="3" v-model="p3correct" name="answerchoice3"
            ><n-input v-model:value="p3c3" type="text" class="form-field" id="answerText3" name="answerText3" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 3 for Question 3" />
        </div>  
              </n-space>
          </td>
        </tr>
      </div>
    </div>
    <a href="RationalePopup.vue"><n-button size="large">Submit</n-button> </a>
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NSpace, NInput } from "naive-ui";
import { ref } from "vue";

export default {
  name: "DropDownSentence",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NSpace,
    NInput
  },
  setup() {
    return {
      value: ref(null),
      qid: ref(null),
      histAndPhys: ref(null),
      nurseNotes: ref(null), 
      flowSheet: ref(null), 
      labResults: ref(null), 
      orders: ref(null), 
      questionp1: ref(null), 
      p1c1: ref(null), 
      p1c2: ref(null), 
      p1c3: ref(null), 
      p1correct: ref(null), 
      questionp2: ref(null), 
      p2c1: ref(null), 
      p2c2: ref(null), 
      p2c3: ref(null), 
      p2correct: ref(null), 
      questionp3: ref(null), 
      p3c1: ref(null), 
      p3c2: ref(null), 
      p3c3: ref(null), 
      p3correct: ref(null), 
      rationale: ref(null)
    };
  },
  methods: {
      enterQuestion() {
        var newQ = {"qid":this.qid, "histAndPhys": this.histAndPhys, "nurseNotes":this.nurseNotes, "flowSheet":this.flowSheet, "labResults":this.labResults, "orders":this.orders, "questionp1": this.questionp1, "p1c1": this.p1c1, "p1c2": this.p1c2, "p1c3": this.p1c3, "p1correct": this.p1correct, 
        "questionp2": this.questionp2, "p2c1": this.p2c1, "p2c2": this.p2c2, "p2c3": this.p2c3, "p2correct": this.p2correct, "questionp3": this.questionp3, "p3c1": this.p3c1, "p3c2": this.p3c2, "p3c3": this.p3c3, "p3correct": this.p3correct,   "rationale": this.rationale}
        console.log(newQ)
        this.$store.dispatch('newDDS', newQ);
      }}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*****CONTAINER*****/
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

/*****HEADER/TITLE*****/
.header {
  background-color: #2094ff;
  color: white;
  width: 100%;
}
h2 {
  color: #fe4400;
}

/*****TABS*****/
.information {
  border: 1px #808080 solid;
  padding: 35px;
  margin: 35px 0;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #cac9c9;
}

/*****QUESTION*****/
.question {
  width: 75vw;
  text-align: left;
}

/*****ANSWERS*****/
.answer {
  border: 1px #808080 solid;
  border-radius: 10px;
  margin: 0;
  margin-top: 10px;
}

.n-select {
  width: 250px;
}

/*****BUTTON*****/
.n-button {
  background-color: #ffc633;
  box-shadow: 10px 10px 5px #cac9c9;
  margin: 25px 0;
}

a {
  text-decoration: none;
}
</style>
