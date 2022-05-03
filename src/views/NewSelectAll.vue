<template>
  <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
    <div class="main">
      <h2>New Select All That Apply Question</h2>
      <div class="quizTitle">
        <label for="quizT">Select Quiz Group for Question </label>
        <select v-model="qid">
          <option
            v-for="quiz in this.$store.state.quizzes"
            v-bind:value="quiz.quiz_id"
            :key="quiz.quiz_id"
          >
            {{ quiz.title }}
          </option>
        </select>
      </div>
      <div class="question">
        <h4>Question</h4>
        <div class="information">
          <!-- tab group for background information to be entered -->
          <n-tabs type="line">
            <n-tab-pane name="History and Physical" tab="History and Physical">
              <n-input
                v-model:value="histAndPhys"
                type="text"
                class="form-field"
                id="histAndPhys"
                name="histAndPhys"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter History &amp; Physical Information"
              />
            </n-tab-pane>
            <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
              <n-input
                v-model:value="nurseNotes"
                type="text"
                class="form-field"
                id="nurseNotes"
                name="nurseNotes"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Nurse's Notes"
              />
            </n-tab-pane>
            <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
              <n-input
                v-model:value="flowSheet"
                type="text"
                class="form-field"
                id="flowSheet"
                name="flowSheet"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Flow Sheet"
              />
            </n-tab-pane>
            <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
              <n-input
                v-model:value="labResults"
                type="text"
                class="form-field"
                id="labResults"
                name="labResults"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Labratory Results"
              />
            </n-tab-pane>
            <n-tab-pane name="Orders" tab="Orders">
              <n-input
                v-model:value="orders"
                type="text"
                class="form-field"
                id="orders"
                name="orders"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Orders"
              />
            </n-tab-pane>
          </n-tabs>
        </div>
          <h4>Question Text</h4>

        <n-input
          v-model:value="questText"
          type="text"
          class="form-field"
          id="questText"
          name="questText"
          :input-props="{ type: 'clearable' }"
          placeholder="Enter Question Text"
        />
        <div>
          <div class="answer">
            <input
              type="checkbox"
              value="1"
              v-model="a1Correct"
              name="answerchoice"
            /><n-input
              v-model:value="a1"
              type="text"
              class="form-field"
              id="answerText1"
              name="answerText1"
              :input-props="{ type: 'clearable' }"
              placeholder="Enter Answer Choice 1"
            />
          </div>
          <div class="answer">
            <input
              type="checkbox"
              value="1"
              v-model="a2Correct"
              name="answerchoice"
            /><n-input
              v-model:value="a2"
              type="text"
              class="form-field"
              id="answerText2"
              name="answerText2"
              :input-props="{ type: 'clearable' }"
              placeholder="Enter Answer Choice 2"
            />
          </div>
          <div class="answer">
            <input
              type="checkbox"
              value="1"
              v-model="a3Correct"
              name="answerchoice"
            /><n-input
              v-model:value="a3"
              type="text"
              class="form-field"
              id="answerText3"
              name="answerText3"
              :input-props="{ type: 'clearable' }"
              placeholder="Enter Answer Choice 3"
            />
          </div>
          <div class="answer">
            <input
              type="checkbox"
              value="1"
              v-model="a4Correct"
              name="answerchoice"
            /><n-input
              v-model:value="a4"
              type="text"
              class="form-field"
              id="answerText4"
              name="answerText4"
              :input-props="{ type: 'clearable' }"
              placeholder="Enter Answer Choice 4"
            />
          </div>
          <div class="answer">
            <input
              type="checkbox"
              value="1"
              v-model="a5Correct"
              name="answerchoice"
            /><n-input
              v-model:value="a5"
              type="text"
              class="form-field"
              id="answerText5"
              name="answerText5"
              :input-props="{ type: 'clearable' }"
              placeholder="Enter Answer Choice 5"
            />
          </div>
          <div class="answer">
            <input
              type="checkbox"
              value="1"
              v-model="a6Correct"
              name="answerchoice"
            /><n-input
              v-model:value="a6"
              type="text"
              class="form-field"
              id="answerText6"
              name="answerText6"
              :input-props="{ type: 'clearable' }"
              placeholder="Enter Answer Choice 6"
            />
          </div>
        </div>
        <h4>Rationale Text</h4>
        <n-input
          v-model:value="rationale"
          type="text"
          class="form-field"
          id="rationale"
          name="rationale"
          :input-props="{ type: 'clearable' }"
          placeholder="Enter Rationale Text"
        />
      </div>

      <n-button
        size="large"
        @click="
          enterQuestion(
            qid,
            questText,
            a1Correct,
            a1,
            a2Correct,
            a2,
            a3Correct,
            a3,
            a4Correct,
            a4,
            a5Correct,
            a5,
            a6Correct,
            a6,
            rationale
          )
        "
        >Add Question</n-button
      >
    </div>
  </n-config-provider>
</template>

<script>
import { NButton, NInput, NConfigProvider, NTabs, NTabPane } from "naive-ui";
import { supabase } from "../supabase/init";
import { ref } from "vue";

export default {
  name: "NewSelectAll",
  components: {
    NButton,
    NInput,
    NConfigProvider,
    NTabs,
    NTabPane,
  },
  setup() {
    return {
      histAndPhys: ref(null),
      nurseNotes: ref(null),
      flowSheet: ref(null),
      labResults: ref(null),
      orders: ref(null),
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
      rationale: ref(null),
    };
  },
  data() {
    return {
      themeOverrides: {
        common: {
          primaryColor: "#FF8C00",
        },
      },
    };
  },
  methods: {
    enterQuestion() {
      //save correct answer text to corAns array variable for db - a1Correct, a2Correct, etc. vars are BOOLEAN, save corresponding text into corAns variable
      var corAns = [];
      if (this.a1Correct === true) {
        corAns.push(this.a1);
      }
      if (this.a2Correct === true) {
        corAns.push(this.a2);
      }
      if (this.a3Correct === true) {
        corAns.push(this.a3);
      }
      if (this.a4Correct === true) {
        corAns.push(this.a4);
      }
      if (this.a5Correct === true) {
        corAns.push(this.a5);
      }
      if (this.a6Correct === true) {
        corAns.push(this.a6);
      }

      //push new question to database (unused fields as empty)
      const addQ = async () => {
        try {
          let { data: successAdd, error } = await supabase
            .from("question")
            .insert([
              {
                quiz_id: this.qid,
                //all questions added from this page are multiple choice type
                type: "select",
                hist_and_phys: this.histAndPhys,
                nurse_notes: this.nurseNotes,
                flow_sheet: this.flowSheet,
                lab_results: this.labResults,
                orders: this.orders,
                text: this.questText,
                correct_answers: corAns,
                answer_choice: [
                  this.a1,
                  this.a2,
                  this.a3,
                  this.a4,
                  this.a5,
                  this.a6,
                ],
                rationale: this.rationale,
              },
            ]);
          if (error) throw error;
          //console entire question if successfully added
          console.log(successAdd);
        } catch (error) {
          //console error if not added
          console.warn(error.message);
        }
      };
      addQ();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.information {
  border: 1px #808080 solid;
  padding: 35px;
  margin: 35px 0;
}
#quizTitle {
  margin-left: auto;
  margin-right: auto;
}
h2 {
  color: #fe4400;
}

.question {
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
