<template>
  <div class="container">
    <h2>Week {{dds_question.quiz_id}} Review</h2>
    <div class="question">
      <h3>Question</h3>
      <div class="information">
        <n-tabs type="line">
          <n-tab-pane name="History and Physical" tab="History and Physical">
            {{dds_question.hist_and_phys}}
          </n-tab-pane>
          <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
            {{dds_question.nurse_notes}}
          </n-tab-pane>
          <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
            {{question.flow_sheet}} 
          </n-tab-pane>
          <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
            {{dds_question.lab_results}}
          </n-tab-pane>
          <n-tab-pane name="Orders" tab="Orders">
            {{dds_question.orders}}
          </n-tab-pane>
        </n-tabs>
      </div>
      <h4>
        {{dds_question.text}}
      </h4>
      <div>
        <tr v-for="(index) in dds_question.num_rows" :key=index>
          <h4 class="questions">{{dds_question.row_headers[index-1]}}...</h4>
          <td>
            <n-space vertical>
              <n-select
                v-model:value="selectedAns"
                :value = "value"
                :options="dds_question.answer_choice[index-1]"
                clearable
              />
              </n-space>
          </td>
        </tr>
      </div>
    </div>
    <div v-if="!this.$store.state.isSubmitted">
            <n-button size="large" @click="checkAnswer">Submit</n-button>
        </div>
        <div v-else>
            <RationalePopup
                :correct="this.$store.state.correct"
                :rationale="dds_question.rationale"
            />
        </div>
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NSpace, NSelect } from "naive-ui";
import { ref } from "vue";
import { useStore } from "vuex";
import RationalePopup from "../components/RationalePopup.vue";

export default {
  name: "DropDownSentence",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NSpace,
    NSelect,
    RationalePopup
  },
  props: {
    //currect question data passed in as a prop -> immutable
    dds_question: Object
  },
  computed: {
    question() {
      return this.$store.getters.questionNext
    }
  },
  setup(props) {
    const selectedAns = ref([]);
    const store = useStore();
    //compare if all chosen answers are correct return true else false - no partial credit
    function ifSameArray(arr1, arr2) {
      console.log(arr1);
      console.log(arr2);
      if (arr1.length !== arr2.length) return false;
        const arr1_sorted = arr1.sort();
        const arr2_sorted = arr2.sort();
        for (let i = 0; i < arr1.length; i++) {
            if (arr1_sorted[i] !== arr2_sorted[i]) return false;
            }
          return true;
        }
    return {
      checkAnswer() {
        console.log(selectedAns);
        store.state.isSubmitted = true;
        if (
          ifSameArray(
            props.dds_question.correct_answers,
            selectedAns.value
          ) ){
          console.log("correct");
          store.state.correct = "correct";
          store.state.numOfCorrectAnswers =
          store.state.numOfCorrectAnswers + 1;
          store.commit("UPDATE_SCORE");
          } else {
           store.state.correct = "incorrect";
          }
            },
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

/*****TITLE*****/
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
