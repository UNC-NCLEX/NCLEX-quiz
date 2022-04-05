<template>
  <div class="container">
    <div class="header">
      <h1>Pharmacoloy &amp; Pathophysiology</h1>
      <p>Interactive tool to help you learn</p>
    </div>
    <h2>Week {{question.qid}} Review</h2>
    <div class="question">
      <h3>Question</h3>
      <div class="information">
        <n-tabs type="line">
          <n-tab-pane name="History and Physical" tab="History and Physical">
            {{question.histAndPhys}}
          </n-tab-pane>
          <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
            {{question.nurseNotes}}
          </n-tab-pane>
          <n-tab-pane name="Flow Sheet" tab="Flow Sheet"> {{question.flowSheet}}</n-tab-pane>
          <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
            {{question.labResults}}
          </n-tab-pane>
          <n-tab-pane name="Orders" tab="Orders">
            {{question.orders}}
          </n-tab-pane>
        </n-tabs>
      </div>
      <h4>
        {{question.questText}}
      </h4>
      <n-radio-group v-model:value="choiceSelected" name="radiogroup">
        <n-radio :value=1 class="choice-text">{{question.a1}}</n-radio>
        <n-radio :value=2 class="choice-text">{{question.a2}}</n-radio>
        <n-radio :value=3 class="choice-text">{{question.a3}}</n-radio>
        <n-radio :value=4 class="choice-text">{{question.a4}}</n-radio>
        <n-radio :value=5 class="choice-text">{{question.a5}}</n-radio>
      </n-radio-group>     
    </div>
    <n-button size="large" @click=checkAnswer()>Submit</n-button>
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NRadio, NRadioGroup } from "naive-ui";
import { ref } from "vue";

export default {
  name: "MultipleChoice",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NRadio,
    NRadioGroup,
  },
  methods: {
    checkAnswer() {
      if(this.question.qid === this.choiceSelected){
        console.log("correct")
      } else (console.log("incorrect"))
    }
  },
  setup() {
    return {
      value: ref(null),
    };
  },
  computed: {
    question() {console.log(typeof this.$store.getters.questionNext); return this.$store.getters.questionNext
    }
  }
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
.n-radio {
  border: 1px #808080 solid;
  box-shadow: 10px 10px 5px #cac9c9;
  border-radius: 10px;
  width: 72vw;
  padding: 20px 1.5vw;
  margin-top: 10px;
}

.choice-text {
  padding: 0 10px;
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
