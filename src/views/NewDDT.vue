<template>
  <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
    <div class="container">
      <h1>New Drop Down Table Question</h1>
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
          v-model:value="text"
          type="text"
          class="form-field"
          id="text"
          name="text"
          :input-props="{ type: 'clearable' }"
          placeholder="Enter Overall Main Text"
        />

        <div>
          <tr>
            <th>
              <n-input
                v-model:value="heading1"
                type="text"
                class="form-field"
                id="heading1"
                name="heading1"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Column 1 Title"
              />
            </th>
            <th>
              <n-input
                v-model:value="heading2"
                type="text"
                class="form-field"
                id="heading2"
                name="heading2"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Column 2 Title"
              />
            </th>
            <th>
              <n-input
                v-model:value="heading3"
                type="text"
                class="form-field"
                id="heading3"
                name="heading3"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Column 3 Title"
              />
            </th>
          </tr>
          <!-- table row 1 -->
          <tr>
            <h4 class="questions">
              <n-input
                v-model:value="questionp1"
                type="text"
                class="form-field"
                id="answerText1"
                name="answerText1"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Question Sentence 1"
              />
            </h4>
            <td>
              <n-space vertical>
                <div class="answer">
                  <input
                    type="radio"
                    value="1"
                    v-model="p1correct"
                    name="r1c1"
                  /><n-input
                    v-model:value="c1a1"
                    type="text"
                    class="form-field"
                    id="answerText1"
                    name="answerText1"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice 1 for Column 1"
                  />
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="2"
                    v-model="p1correct"
                    name="r1c1"
                  /><n-input
                    v-model:value="c1a2"
                    type="text"
                    class="form-field"
                    id="answerText2"
                    name="answerText2"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice 2 for Column 1"
                  />
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="3"
                    v-model="p1correct"
                    name="r1c1"
                  /><n-input
                    v-model:value="c1a3"
                    type="text"
                    class="form-field"
                    id="answerText3"
                    name="answerText3"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice 3 for Column 1"
                  />
                </div>
              </n-space>
            </td>
            <td>
              <n-space vertical>
                <div class="answer">
                  <input
                    type="radio"
                    value="1"
                    v-model="p2correct"
                    name="r1c2"
                  /><n-input
                    v-model:value="c2a1"
                    type="text"
                    class="form-field"
                    id="answerText1"
                    name="answerText1"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice 1 for Column 2"
                  />
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="2"
                    v-model="p2correct"
                    name="r1c2"
                  /><n-input
                    v-model:value="c2a2"
                    type="text"
                    class="form-field"
                    id="answerText2"
                    name="answerText2"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice 2 for Column 2"
                  />
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="3"
                    v-model="p2correct"
                    name="r1c2"
                  /><n-input
                    v-model:value="c2a3"
                    type="text"
                    class="form-field"
                    id="answerText3"
                    name="answerText3"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Answer Choice 3 for Column 2"
                  />
                </div>
              </n-space>
            </td>
          </tr>
          <!-- table row 2 -->
          <tr>
            <h4 class="questions">
              <n-input
                v-model:value="questionp2"
                type="text"
                class="form-field"
                id="answerText1"
                name="answerText1"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Question Sentence 2"
              />
            </h4>
            <td>
              <n-space vertical>
                <div class="answer">
                  <input
                    type="radio"
                    value="1"
                    v-model="p3correct"
                    name="r2c1"
                  />{{ c1a1 }}
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="2"
                    v-model="p3correct"
                    name="r2c1"
                  />{{ c1a2 }}
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="3"
                    v-model="p3correct"
                    name="r2c1"
                  />{{ c1a3 }}
                </div>
              </n-space>
            </td>
            <td>
              <n-space vertical>
                <div class="answer">
                  <input
                    type="radio"
                    value="1"
                    v-model="p4correct"
                    name="r2c2"
                  />{{ c2a1 }}
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="2"
                    v-model="p4correct"
                    name="r2c2"
                  />{{ c2a2 }}
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="3"
                    v-model="p4correct"
                    name="r2c2"
                  />{{ c2a3 }}
                </div>
              </n-space>
            </td>
          </tr>
          <!-- table row 3 -->
          <tr>
            <h4 class="questions">
              <n-input
                v-model:value="questionp3"
                type="text"
                class="form-field"
                id="answerText1"
                name="answerText1"
                :input-props="{ type: 'clearable' }"
                placeholder="Enter Question Sentence 3"
              />
            </h4>
            <td>
              <n-space vertical>
                <div class="answer">
                  <input
                    type="radio"
                    value="1"
                    v-model="p5correct"
                    name="r3c1"
                  />{{ c1a1 }}
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="2"
                    v-model="p5correct"
                    name="r3c1"
                  />{{ c1a2 }}
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="3"
                    v-model="p5correct"
                    name="r3c1"
                  />{{ c1a3 }}
                </div>
              </n-space>
            </td>
            <td>
              <n-space vertical>
                <div class="answer">
                  <input
                    type="radio"
                    value="1"
                    v-model="p6correct"
                    name="r3c2"
                  />{{ c2a1 }}
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="2"
                    v-model="p6correct"
                    name="r3c2"
                  />{{ c2a2 }}
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    value="3"
                    v-model="p6correct"
                    name="r3c2"
                  />{{ c2a3 }}
                </div>
              </n-space>
            </td>
          </tr>
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

      <n-button @click="enterQuestion()" size="large">Add Question</n-button>
    </div>
  </n-config-provider>
</template>

<script>

import { NButton, NTabPane, NTabs, NSpace, NInput, NConfigProvider, useMessage } from "naive-ui";

import { supabase } from "../supabase/init";
import { ref } from "vue";

export default {
  name: "NewDDT",
  props: {
    quizzes: Array,
  },
  components: {
    NButton,
    NTabPane,
    NTabs,
    NSpace,
    NInput,
    NConfigProvider,

  },
  setup() {
    const message = useMessage();

    return {
      //initialize variables for instructor entered data
      value: ref(null),
      qid: ref(null),
      histAndPhys: ref(null),
      nurseNotes: ref(null),
      flowSheet: ref(null),
      labResults: ref(null),
      orders: ref(null),
      text: ref(null),
      heading1: ref(null),
      heading2: ref(null),
      heading3: ref(null),
      questionp1: ref(null),
      c1a1: ref(null),
      c1a2: ref(null),
      c1a3: ref(null),
      p1correct: ref(null),
      questionp2: ref(null),
      c2a1: ref(null),
      c2a2: ref(null),
      c2a3: ref(null),
      p2correct: ref(null),
      questionp3: ref(null),
      p3correct: ref(null),
      rationale: ref(null),
      p4correct: ref(null),
      p5correct: ref(null),
      p6correct: ref(null),

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
      const findMissingIndex = function(arr){
        let idx = arr.indexOf(null)
        if (idx == -1){
          idx = arr.indexOf('')
        }
        return idx
      }
      //save correct answer text to corAns variable for db - answer var is INT from radio buttons, save corresponding text into corAns variable
      var corAns = [];
      if (this.p1correct == 1) {
        corAns.push(this.c1a1);
      }
      if (this.p1correct == 2) {
        corAns.push(this.c1a2);
      }
      if (this.p1correct == 3) {
        corAns.push(this.c1a3);
      }
      if (this.p2correct == 1) {
        corAns.push(this.c2a1);
      }
      if (this.p2correct == 2) {
        corAns.push(this.c2a2);
      }
      if (this.p2correct == 3) {
        corAns.push(this.c2a3);
      }
      if (this.p3correct == 1) {
        corAns.push(this.c1a1);
      }
      if (this.p3correct == 2) {
        corAns.push(this.c1a2);
      }
      if (this.p3correct == 3) {
        corAns.push(this.c1a3);
      }
      if (this.p4correct == 1) {
        corAns.push(this.c2a1);
      }
      if (this.p4correct == 2) {
        corAns.push(this.c2a2);
      }
      if (this.p4correct == 3) {
        corAns.push(this.c2a3);
      }
      if (this.p5correct == 1) {
        corAns.push(this.c1a1);
      }
      if (this.p5correct == 2) {
        corAns.push(this.c1a2);
      }
      if (this.p5correct == 3) {
        corAns.push(this.c1a3);
      }
      if (this.p6correct == 1) {
        corAns.push(this.c2a1);
      }
      if (this.p6correct == 2) {
        corAns.push(this.c2a2);
      }
      if (this.p6correct == 3) {
        corAns.push(this.c2a3);
      }
      let rowH = [this.heading1, this.heading2, this.heading3];

      const addQ = async () => {
        // Data Validation: Checks if any required field is empty or null
        let requiredFields = [this.qid, this.questText, this.c1a1, this.c1a2, this.c1a3, this.c2a1, this.c2a2, this.c2a3, this.questionp1, this.questionp2, this.questionp3, this.rationale,]
        let requiredFieldErrorLabels = ['Please Select a Quiz', 'Please Enter a Main Question Text', 'Please input all Answer Choices', 'Please input all Answer Choices', 'Please input all Answer Choices', 'Please input all Answer Choices', 'Please input all Answer Choices', 'Please input all Answer Choices', 'Please input the Question for Row 1', 'Please input the Question for Row 2', 'Please input the Question for Row 3', 'Please input a rationale for correct answer']
        if(requiredFields.includes(null) || requiredFields.includes('')){
          let missingIndex = findMissingIndex(requiredFields)
          this.createErrorMessage(
            `Error: ${requiredFieldErrorLabels[missingIndex]}`,
            5000
          );
          return;
        }
        if(rowH.includes(null) || rowH.includes('')){
          let missingIndex = findMissingIndex(requiredFields)
          this.createErrorMessage(
            `Error: Please Input Row Header ${missingIndex + 1}`,
            5000
          );
          return 
        }
        if(corAns.length == 0 ){
          this.createErrorMessage(
            `Error: Please Select the Correct Answer`,
            5000
          );
          return 
        }
        try {
          let { error } = await supabase
            .from("question")
            .insert([
              {
                quiz_id: this.qid,
                //all questions added from this page are dropdown sentence type
                type: "ddt",
                hist_and_phys: this.histAndPhys,
                nurse_notes: this.nurseNotes,
                flow_sheet: this.flowSheet,
                lab_results: this.labResults,
                orders: this.orders,
                text: this.text,
                row_headers: rowH,
                correct_answers: corAns,
                answer_choice: [
                  {
                    row0: [this.questionp1, this.questionp2, this.questionp3],
                    row1: [
                      {
                        label: this.c1a1,
                        value: this.c1a1,
                      },
                      {
                        label: this.c1a2,
                        value: this.c1a2,
                      },
                      {
                        label: this.c1a3,
                        value: this.c1a3,
                      },
                    ],
                    row2: [
                      {
                        label: this.c2a1,
                        value: this.c2a1,
                      },
                      {
                        label: this.c2a2,
                        value: this.c2a2,
                      },
                      {
                        label: this.c2a3,
                        value: this.c2a3,
                      },
                    ],
                  },
                ],
                rationale: this.rationale,
              },
            ]);
          if (error) throw error;
          //console entire question if successfully added


          this.createSuccessMessage(
            "Success! New question was created! Check selected quiz.",
            5000
          );
        } catch (error) {
          //console error if not added
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
  margin: 25px 0;
}

a {
  text-decoration: none;
}
</style>
