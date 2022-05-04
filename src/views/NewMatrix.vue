<template>
  <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
    <div class="container">
      <h1>New Matrix Table Question</h1>
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
        <br />
        <div>
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
              <th>
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
              <th>
                <n-input
                  v-model:value="h3"
                  type="text"
                  class="form-field"
                  id="questText"
                  name="questText"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Heading Text"
                />
              </th>
              <th>
                <n-input
                  v-model:value="h4"
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
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r1b1"
                    name="answerchoice"
                  />
                </td>
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r1b2"
                    name="answerchoice"
                  />
                </td>
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r1b3"
                    name="answerchoice"
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
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r2b1"
                    name="answerchoice"
                  />
                </td>
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r2b2"
                    name="answerchoice"
                  />
                </td>
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r2b3"
                    name="answerchoice"
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
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r3b1"
                    name="answerchoice"
                  />
                </td>
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r3b2"
                    name="answerchoice"
                  />
                </td>
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r3b3"
                    name="answerchoice"
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
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r4b1"
                    name="answerchoice"
                  />
                </td>
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r4b2"
                    name="answerchoice"
                  />
                </td>
                <td style="text-align:center">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="r4b3"
                    name="answerchoice"
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
  NTable,
  NInput,
  NConfigProvider,
  useMessage,
} from "naive-ui";

import { ref } from "vue";
import { supabase } from "../supabase/init";

export default {
  name: "NewMatrix",
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
      h3: ref(null),
      h4: ref(null),
      row1: ref(null),
      row2: ref(null),
      row3: ref(null),
      row4: ref(null),
      r1b1: false,
      r1b2: false,
      r1b3: false,
      r2b1: false,
      r2b2: false,
      r2b3: false,
      r3b1: false,
      r3b2: false,
      r3b3: false,
      r4b1: false,
      r4b2: false,
      r4b3: false,
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
      if (this.r1b1 === true) {
        corAns.push(1);
      }
      if (this.r1b2 === true) {
        corAns.push(2);
      }
      if (this.r1b3 === true) {
        corAns.push(3);
      }
      if (this.r2b1 === true) {
        corAns.push(4);
      }
      if (this.r2b2 === true) {
        corAns.push(5);
      }
      if (this.r2b3 === true) {
        corAns.push(6);
      }
      if (this.r3b1 === true) {
        corAns.push(7);
      }
      if (this.r3b2 === true) {
        corAns.push(8);
      }
      if (this.r3b3 === true) {
        corAns.push(9);
      }
      if (this.r4b1 === true) {
        corAns.push(10);
      }
      if (this.r4b2 === true) {
        corAns.push(11);
      }
      if (this.r4b3 === true) {
        corAns.push(12);
      }

      //push new question to database (unused fields as empty)
      const addQ = async () => {
        let requiredFields = [
          this.qid,
          this.questText,
          this.h1,
          this.h2,
          this.h3,
          this.h4,
          this.row1,
          this.row2,
          this.row3,
          this.row4,
          this.rationale,
        ];
        let requiredFieldErrorLabels = [
          "Please Select a Quiz",
          "Please Enter a Main Question Text",
          "Please input Heading 1",
          "Please input Heading 2",
          "Please input Heading 3",
          "Please input Heading 4",
          "Please input Row 1",
          "Please input Row 2",
          "Please input Row 3",
          "Please input Row 4",
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
                type: "mt",
                hist_and_phys: this.histAndPhys,
                has_table: true,
                row_headers: [this.h1, this.h2, this.h3, this.h4],
                nurse_notes: this.nurseNotes,
                flow_sheet: this.flowSheet,
                lab_results: this.labResults,
                orders: this.orders,
                text: this.questText,
                correct_answers: corAns,
                answer_choice: [
                  {
                    row: this.row1
                  },
                  {
                    row: this.row2
                  },
                  {
                    row: this.row3
                  },
                  {
                    row: this.row4
                  }
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
