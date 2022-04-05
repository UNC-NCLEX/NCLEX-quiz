<template>
  <div class="main">
    <h2> New Select All That Apply Question</h2>
    <div class="quizTitle">
      <label for="quizT">Select Quiz Group for Question </label>
      <select v-model="qid" >
        <option v-for="quiz in quizzes" v-bind:value="quiz.qid" :key="quiz.qid">{{quiz.name}}</option>
      </select>
    </div>
    <div class="question">
      <h4>
        Question Text
      </h4>

      <n-input v-model:value="questText" type="text" class="form-field" id="questText" name="questText" :input-props="{ type: 'clearable' }" placeholder="Enter Question Text" />
      <div>
      

        <div class="answer">
          <input type="checkbox" value=1 v-model="a1Correct" name="answerchoice"
            ><n-input v-model:value="a1" type="text" class="form-field" id="answerText1" name="answerText1" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 1" />
          
        </div>
        <div class="answer">
          <input type="checkbox" value=1 v-model="a2Correct" name="answerchoice"
            ><n-input v-model:value="a2" type="text" class="form-field" id="answerText2" name="answerText2" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 2" />
          
        </div>
        <div class="answer">
          <input type="checkbox" value=1 v-model="a3Correct" name="answerchoice"
            ><n-input v-model:value="a3" type="text" class="form-field" id="answerText3" name="answerText3" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 3" />
          
        </div>
        <div class="answer">
          <input type="checkbox" value=1 v-model="a4Correct" name="answerchoice"
            ><n-input v-model:value="a4" type="text" class="form-field" id="answerText4" name="answerText4" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 4" />
         
        </div>
        <div class="answer">
          <input type="checkbox" value=1 v-model="a5Correct" name="answerchoice"
            ><n-input v-model:value="a5" type="text" class="form-field" id="answerText5" name="answerText5" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 5" />    
         
        </div>
        <div class="answer">
          <input type="checkbox" value=1 v-model="a6Correct" name="answerchoice"
            ><n-input v-model:value="a6" type="text" class="form-field" id="answerText6" name="answerText6" :input-props="{ type: 'clearable' }" placeholder="Enter Answer Choice 6" />    
          
        </div>
               
      </div>
      <h4>
        Rationale Text
      </h4>
      <n-input v-model:value="rationale" type="text" class="form-field" id="rationale" name="rationale" :input-props="{ type: 'clearable' }" placeholder="Enter Rationale Text" />
      
    </div>

    <n-button size="large" @click="enterQuestion(qid, questText, a1Correct, a1, a2Correct, a2, a3Correct, a3, a4Correct, a4, a5Correct, a5, a6Correct, a6, rationale)">Add Question</n-button>

  </div>
</template>

<script>
import { NButton, NInput } from "naive-ui";
import {ref} from 'vue';
export default {
  name: "NewSelectAll",
  components: {
    NButton,
    NInput,
  },
    setup() {
    return {
      value: ref(null),
      qid: ref(null),
      questText: ref(null),
      a1Correct: false,
      a1: ref(null),
      a2Correct: false,
      a2: ref(null),
      a3Correct: false,
      a3: ref(null),
      a4Correct: false,
      a4: ref(null),
      a5Correct: false,
      a5: ref(null),
      a6Correct: false,
      a6: ref(null),
      rationale: ref(null)
    };
  },
  props: {
    quizzes: Array
  },
  methods: {
      enterQuestion() {
        var newQ = {"qid": this.qid, "questText": this.questText, "a1Correct": this.a1Correct, "a1": this.a1, "a2Correct": this.a2Correct, "a2": this.a2, "a3Correct": this.a3Correct, "a3": this.a3, "a4Correct": this.a4Correct, "a4": this.a4, "a5Correct": this.a5Correct, "a5": this.a5, "a6Correct": this.a6Correct, "a6": this.a6, "rationale": this.rationale}
        console.log(newQ)
        this.$store.dispatch('newSel', newQ);
      }
      
      }
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
