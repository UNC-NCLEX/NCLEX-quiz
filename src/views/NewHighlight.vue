<template>
  <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
    <div class="container">
      <h1>New Highlight Table Question</h1>
      <div class="quizTitle">
        <label for="quizT">Select Quiz Group for Question </label>
        <!-- dropdown with current quiz names to assign question to quiz, saved in qid variable -->
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
        <!-- tab group for background information n-input fields to take user input -->
        <div class="information">
          <n-tabs type="line">
            <n-tab-pane name="History and Physical" tab="History and Physical">
              <n-input
                v-model:value="hist_and_phys"
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
                v-model:value="nurse_notes"
                type="text"
                class="form-field"
                id="nurse_notes"
                name="nurse_notes"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Nurse's Notes"
              />
            </n-tab-pane>
            <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
              <n-input
                v-model:value="flow_sheet"
                type="text"
                class="form-field"
                id="flow_sheet"
                name="flow_sheet"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Flow Sheet"
              />
            </n-tab-pane>
            <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
              <n-input
                v-model:value="lab_results"
                type="text"
                class="form-field"
                id="lab_results"
                name="lab_results"
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
        <div>
          <br />
          <n-table>
            <thead>
              <th>
                <n-input
                  v-model:value="h1"
                  type="text"
                  class="form-field"
                  id="questText"
                  name="questText"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Heading Text"
                />
              </th>
              <th colspan="2">
                <n-input
                  v-model:value="h2"
                  type="text"
                  class="form-field"
                  id="questText"
                  name="questText"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Heading Text"
                />
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <n-input
                    v-model:value="row1"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Question Text"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    value="1"
                    v-model="a1Correct"
                    name="answerchoice"
                  />
                  <n-input
                    v-model:value="a1"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    value="1"
                    v-model="a2Correct"
                    name="answerchoice"
                  />
                  <n-input
                    v-model:value="a2"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <n-input
                    v-model:value="row2"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Question Text"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    value="1"
                    v-model="a3Correct"
                    name="answerchoice"
                  />
                  <n-input
                    v-model:value="a3"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    value="1"
                    v-model="a4Correct"
                    name="answerchoice"
                  />
                  <n-input
                    v-model:value="a4"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <n-input
                    v-model:value="row3"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Question Text"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    value="1"
                    v-model="a5Correct"
                    name="answerchoice"
                  />
                  <n-input
                    v-model:value="a5"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    value="1"
                    v-model="a6Correct"
                    name="answerchoice"
                  />
                  <n-input
                    v-model:value="a6"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <n-input
                    v-model:value="row4"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Question Text"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    value="1"
                    v-model="a7Correct"
                    name="answerchoice"
                  />
                  <n-input
                    v-model:value="a7"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    value="1"
                    v-model="a8Correct"
                    name="answerchoice"
                  />
                  <n-input
                    v-model:value="a8"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice"
                  />
                </td>
              </tr>
            </tbody>
          </n-table>
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
            a1Correct,
            a2Correct,
            a3Correct,
            a4Correct,
            a5Correct,
            a6Correct,
            a7Correct,
            a8Correct,
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
  NTable,
  NInput,
  NConfigProvider,
  useMessage,
} from "naive-ui";

import { ref } from "vue";
import { supabase } from "../supabase/init";

export default {
  name: "NewHighlight",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NTable,
    NInput,
    NConfigProvider,
  },
  setup() {
    const message = useMessage();

    return {
      histAndPhys: ref(null),
      nurseNotes: ref(null),
      flowSheet: ref(null),
      labResults: ref(null),
      orders: ref(null),
      value: ref(null),
      qid: ref(null),
      questText: ref(null),
      h1: ref(null),
      h2: ref(null),
      row1: ref(null),
      row2: ref(null),
      row3: ref(null),
      row4: ref(null),
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
      a7Correct: false,
      a7: ref(null),
      a8Correct: false,
      a8: ref(null),
      rationale: ref(null),

      createSuccessMessage(msg, time) {
        message.success(msg, { duration: time });
      },
      createErrorMessage(msg, time) {
        message.error(msg, { duration: time });
      },
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
      const findMissingIndex = function (arr) {
        let idx = arr.indexOf(null);
        if (idx == -1) {
          idx = arr.indexOf("");
        }
        return idx;
      };
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
      if (this.a7Correct === true) {
        corAns.push(this.a7);
      }
      if (this.a8Correct === true) {
        corAns.push(this.a8);
      }

      //push new question to database (unused fields as empty)
      const addQ = async () => {
        let requiredFields = [
          this.qid,
          this.questText,
          this.a1,
          this.a2,
          this.a3,
          this.a4,
          this.a5,
          this.a6,
          this.a7,
          this.a8,
          this.rationale,
        ];
        let requiredFieldErrorLabels = [
          "Please Select a Quiz",
          "Please Enter a Main Question Text",
          "Please input Answer Choice 1",
          "Please input Answer Choice 2",
          "Please input Answer Choice 3",
          "Please input Answer Choice 4",
          "Please input Answer Choice 5",
          "Please input Answer Choice 6",
          "Please input a rationale for correct answer",
        ];
        if (requiredFields.includes(null) || requiredFields.includes("")) {
          let missingIndex = findMissingIndex(requiredFields);
          this.createErrorMessage(
            `Error: ${requiredFieldErrorLabels[missingIndex]}`,
            5000
          );
          return;
        }
        if (corAns.length == 0) {
          this.createErrorMessage(
            `Error: Please Select the Correct Answer(s)`,
            5000
          );
          return;
        }
        try {
          let { data: successAdd, error } = await supabase
            .from("question")
            .insert([
              {
                quiz_id: this.qid,
                //all questions added from this page are highlight type
                type: "ht",
                hist_and_phys: this.histAndPhys,
                has_table: true,
                row_headers: [this.h1, this.h2],
                nurse_notes: this.nurseNotes,
                flow_sheet: this.flowSheet,
                lab_results: this.labResults,
                orders: this.orders,
                text: this.questText,
                correct_answers: corAns,
                answer_choice: [
                    {
                      row: this.row1,
                      options: [
                        {
                          label: this.a1,
                        },
                        {
                          label: this.a2,
                        },
                      ],
                    },
                    {
                      row: this.row2,
                      options: [
                        {
                          label: this.a3,
                        },
                        {
                          label: this.a4,
                        },
                      ],
                    },
                    {
                      row: this.row3,
                      options: [
                        {
                          label: this.a5,
                        },
                        {
                          label: this.a6,
                        },
                      ],
                    },
                    {
                      row: this.row4,
                      options: [
                        {
                          label: this.a7,
                        },
                        {
                          label: this.a8,
                        },
                      ],
                    },
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
            "Error! Check to see if all fields have been entered.",
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
/*****CONTAINER*****/
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

/*****TABS*****/
.information {
  border: 1px #808080 solid;
  padding: 35px;
  margin: 35px 0;
  border-radius: 10px;
  /* box-shadow: 10px 10px 5px #cac9c9; */
}

/*****QUESTION*****/
.question {
  width: 75vw;
  text-align: left;
}

/*****TABLE*****/
/* .n-table {
  box-shadow: 10px 10px 5px #cac9c9;
} */

th:not(:first-child) {
  text-align: center;
}

/*****ANSWERS******/
.n-checkbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

/*****BUTTON*****/
.n-button {
  background-color: #ffc633;
  /* box-shadow: 10px 10px 5px #cac9c9; */
  margin: 25px 0;
}
a {
  text-decoration: none;
}
</style>
