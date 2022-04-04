<template>
  <div class="container">
    <div class="header">
      <h1>Pharmacoloy &amp; Pathophysiology</h1>
      <p>Interactive tool to help you learn</p>
    </div>
    <h2>Quiz {{question.qid}} Review</h2>
    <div class="question">
      <h3>Question</h3>

      <h4>
        {{question.questText}}
      </h4>
      <n-checkbox-group v-model:value="choiceSel" name="radiogroup">
        <n-checkbox :value=1>
          <div class="choice-text">{{ question.a1 }}</div>
        </n-checkbox>
        <n-checkbox :value=2>
          <div class="choice-text">{{ question.a2 }}</div>
        </n-checkbox>
        <n-checkbox :value=3>
          <div class="choice-text">{{ question.a3 }}</div>
        </n-checkbox>
        <n-checkbox :value=4>
          <div class="choice-text">{{ question.a4 }}</div>
        </n-checkbox>
        <n-checkbox :value=5>
          <div class="choice-text">{{ question.a5 }}</div>
        </n-checkbox>
        <n-checkbox :value=6>
          <div class="choice-text">{{ question.a6 }}</div>
        </n-checkbox>
      </n-checkbox-group>
    </div>
    <n-button size="large">Submit</n-button>
  </div>
</template>

<script>
import { NButton, NCheckbox, NCheckboxGroup } from "naive-ui";
import { ref } from "vue";

export default {
  name: "MultipleResponse",
  components: {
    NButton,
    NCheckbox,
    NCheckboxGroup,
  },  computed: {
    question() { return this.$store.getters.questionNext
    }
  },
  setup() {
    return {
      value: ref(null)
    };
  },
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
.n-checkbox {
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
