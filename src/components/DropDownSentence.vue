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
        Choose the most likely options for the information missing from the
        statements regarding absorption of intravenous medications by selecting
        from the list of options provided.
      </h4>
      <div>
        <tr>
          <h4 class="questions">{{ dds_question.answer_choice[0].p1Text }}...</h4>
          <td>
            <n-space vertical>
              <n-select
                v-model="p1"
                :options="[{label: dds_question.answer_choice[0].p1Choices[0], value: dds_question.answer_choice[0].p1Choices[0]}, {label: dds_question.answer_choice[0].p1Choices[1], value: dds_question.answer_choice[0].p1Choices[1]}, {label: dds_question.answer_choice[0].p1Choices[2], value: dds_question.answer_choice[0].p1Choices[2]}]"
                clearable
              />
              </n-space>
          </td>
        </tr>
        <tr>
          <h4 class="questions">{{ dds_question.answer_choice[0].p2Text }}...</h4>
          <td>
            <n-space vertical>
              <n-select
                v-model="p2"
                :options="[{label: dds_question.answer_choice[0].p2Choices[0], value: dds_question.answer_choice[0].p2Choices[0]}, {label: dds_question.answer_choice[0].p2Choices[1], value: dds_question.answer_choice[0].p2Choices[1]}, {label: dds_question.answer_choice[0].p2Choices[2], value: dds_question.answer_choice[0].p2Choices[2]}]"
                clearable
              />
              </n-space>
          </td>
        </tr>
        <tr>
          <h4 class="questions">{{ dds_question.answer_choice[0].p3Text }}...</h4>
          <td>
            <n-space vertical>
              <n-select
                v-model="p3"
                :options="[{label: dds_question.answer_choice[0].p3Choices[0], value: dds_question.answer_choice[0].p3Choices[0]}, {label: dds_question.answer_choice[0].p3Choices[1], value: dds_question.answer_choice[0].p3Choices[1]}, {label: dds_question.answer_choice[0].p3Choices[2], value: dds_question.answer_choice[0].p3Choices[2]}]"
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
    dds_question: Object
  },
  computed: {
    question() {console.log(typeof this.$store.getters.questionNext); return this.$store.getters.questionNext
    }
  },
      setup(props) {
        const p1 = ref("");
        const p2 = ref("");
        const p3 = ref("");
        const store = useStore();
        return {
            checkAnswer() {
                console.log(p1.value, p2.value, p3.value);
                store.state.isSubmitted = true;
                if (
                    props.dds_question.correct_answers[0]==p1.value && props.dds_question.correct_answers[1]==p2.value && props.dds_question.correct_answers[2]==p3.value
                ) {
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
