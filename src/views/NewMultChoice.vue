<template>
  <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
    <div class="main">
      <h1>New Multiple Choice Question</h1>
      <div class="quizTitle">
        <label for="quizT">Select Quiz Group for Question </label>
        <!-- create dropdown of current quizzes from database to select quiz group for question -->
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
        <h2>Question</h2>
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
        <!-- n-input fields for text input -->
        <h2>Question Text</h2>
        <n-input
          v-model:value="questText"
          type="text"
          class="form-field"
          id="questText"
          name="questText"
          :input-props="{ type: 'clearable' }"
          placeholder="Enter Question Text"
        />
        <br />
        <div>
          <!-- "answer" variable models the correct answer indicated by instructor (radio button) -->
          <div class="answer">
            <input
              type="radio"
              value="1"
              v-model="answer"
              name="answerchoice"
            /><n-input
              v-model:value="answerText1"
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
              type="radio"
              value="2"
              v-model="answer"
              name="answerchoice"
            /><n-input
              v-model:value="answerText2"
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
              type="radio"
              value="3"
              v-model="answer"
              name="answerchoice"
            /><n-input
              v-model:value="answerText3"
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
              type="radio"
              value="4"
              v-model="answer"
              name="answerchoice"
            /><n-input
              v-model:value="answerText4"
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
              type="radio"
              value="5"
              v-model="answer"
              name="answerchoice"
            /><n-input
              v-model:value="answerText5"
              type="text"
              class="form-field"
              id="answerText5"
              name="answerText5"
              :input-props="{ type: 'clearable' }"
              placeholder="Enter Answer Choice 5"
            />
          </div>
          <br />
        </div>
        <h2>Rationale Text</h2>

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
            histAndPhys,
            nurseNotes,
            flowSheet,
            labResults,
            orders,
            questText,
            answer,
            answerText1,
            answerText2,
            answerText3,
            answerText4,
            answerText5,
            rationale
          )
        "
        >Add Question</n-button
      >
    </div>
  </n-config-provider>
</template>

<script>
import {
  NButton,
  NTabPane,
  NTabs,
  NInput,
  NConfigProvider,
  useMessage,
} from "naive-ui";
import { supabase } from "../supabase/init";

import { ref } from "vue";

export default {
  name: "NewMultChoice",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NInput,
    NConfigProvider,
  },
  setup() {
    const message = useMessage();

    return {
      //initialize inputted variables
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
      rationale: ref(null),
      createSuccessMessage(msg, time) {
        message.success(msg, { duration: time });
      },
      createErrorMessage(msg, time) {
        message.error(msg, { duration: time });
      },
    };
  },
  props: {
    quizzes: Array,
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
      const findMissingIndex = function(arr){
        let idx = arr.indexOf(null)
        if (idx == -1){
          idx = arr.indexOf('')
        }
        return idx
      }
      var corAns = [];
      if (this.answer == 1) {
        corAns.push(this.answerText1);
      }
      if (this.answer == 2) {
        corAns.push(this.answerText2);
      }
      if (this.answer == 3) {
        corAns.push(this.answerText3);
      }
      if (this.answer == 4) {
        corAns.push(this.answerText4);
      }
      if (this.answer == 5) {
        corAns.push(this.answerText5);
      }
      const addQ = async () => {
        // Data Validation: Checks if any required field is empty or null
        let requiredFields = [this.qid, this.questText, this.answerText1, this.answerText2, this.answerText3, this.answerText4, this.answerText5, this.rationale]
        let requiredFieldErrorLabels = ['Please Select a Quiz', 'Please Enter a Main Question Text', 'Please input Answer Choice 1', 'Please input Answer Choice 2', 'Please input Answer Choice 3', 'Please input Answer Choice 4', 'Please input Answer Choice 5', 'Please input Answer Choice 6', 'Please input a rationale for correct answer']
        if(requiredFields.includes(null) || requiredFields.includes('')){
          let missingIndex = findMissingIndex(requiredFields)
          this.createErrorMessage(
            `Error: ${requiredFieldErrorLabels[missingIndex]}`,
            5000
          );
          return;
        }
        if(corAns.length == 0 ){
          this.createErrorMessage(
            `Error: Please Select the Correct Answer`,
            5000
          );
          return 
        }

        // Input the question into the database
        try {
          let { data: successAdd, error } = await supabase
            .from("question")
            .insert([
              {
                quiz_id: this.qid,
                //all questions added from this page are multiple choice type
                type: "mc",
                hist_and_phys: this.histAndPhys,
                nurse_notes: this.nurseNotes,
                flow_sheet: this.flowSheet,
                lab_results: this.labResults,
                orders: this.orders,
                text: this.questText,
                correct_answers: corAns,
                answer_choice: [
                  this.answerText1,
                  this.answerText2,
                  this.answerText3,
                  this.answerText4,
                  this.answerText5,
                ],
                rationale: this.rationale,
              },
            ]);
          if (error) throw error;
          //console entire question if successfully added
          console.log(successAdd);
          this.createSuccessMessage(
            "Success! New question was created! Check selected quiz.",
            5000
          );
        } catch (error) {
          //console error if not added
          console.warn(error.message);
          this.createErrorMessage(
            "Error! Check to see if all fields have been entered",
            5000
          );
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
