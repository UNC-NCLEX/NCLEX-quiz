<template>
<n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
  <div class="container">
    <h1>New Drop Down Sentence Question</h1>
    <div class="quizTitle">
      <label for="quizT">Select Quiz Group for Question </label>
      <!-- dropdown with current quiz names to assign question to quiz, saved in qid variable -->
      <select v-model="qid">
        <option v-for="quiz in this.$store.state.quizzes" v-bind:value="quiz.quiz_id" :key="quiz.quiz_id">
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
          <h4 class="questions">
            <n-input
              v-model:value="questionp1"
              type="text"
              class="form-field"
              id="answerText1"
              name="answerText1"
              :input-props="{ type: 'clearable' }"
              placeholder="Enter Question Sentence 1"
            />...
          </h4>
          <td>
            <n-space vertical>
              <div class="answer">
                <input
                  type="radio"
                  value="1"
                  v-model="p1correct"
                  name="answerchoice1"
                /><n-input
                  v-model:value="p1c1"
                  type="text"
                  class="form-field"
                  id="answerText1"
                  name="answerText1"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Answer Choice 1 for Question 1"
                />
              </div>
              <div class="answer">
                <input
                  type="radio"
                  value="2"
                  v-model="p1correct"
                  name="answerchoice1"
                /><n-input
                  v-model:value="p1c2"
                  type="text"
                  class="form-field"
                  id="answerText2"
                  name="answerText2"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Answer Choice 2 for Question 1"
                />
              </div>
              <div class="answer">
                <input
                  type="radio"
                  value="3"
                  v-model="p1correct"
                  name="answerchoice1"
                /><n-input
                  v-model:value="p1c3"
                  type="text"
                  class="form-field"
                  id="answerText3"
                  name="answerText3"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Answer Choice 3 for Question 1"
                />
              </div>
            </n-space>
          </td>
        </tr>
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
            />...
          </h4>
          <td>
            <n-space vertical>
              <div class="answer">
                <input
                  type="radio"
                  value="1"
                  v-model="p2correct"
                  name="answerchoice2"
                /><n-input
                  v-model:value="p2c1"
                  type="text"
                  class="form-field"
                  id="answerText1"
                  name="answerText1"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Answer Choice 1 for Question 2"
                />
              </div>
              <div class="answer">
                <input
                  type="radio"
                  value="2"
                  v-model="p2correct"
                  name="answerchoice2"
                /><n-input
                  v-model:value="p2c2"
                  type="text"
                  class="form-field"
                  id="answerText2"
                  name="answerText2"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Answer Choice 2 for Question 2"
                />
              </div>
              <div class="answer">
                <input
                  type="radio"
                  value="3"
                  v-model="p2correct"
                  name="answerchoice2"
                /><n-input
                  v-model:value="p2c3"
                  type="text"
                  class="form-field"
                  id="answerText3"
                  name="answerText3"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Answer Choice 3 for Question 2"
                />
              </div>
            </n-space>
          </td>
        </tr>
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
            />...
          </h4>
          <td>
            <n-space vertical>
              <div class="answer">
                <input
                  type="radio"
                  value="1"
                  v-model="p3correct"
                  name="answerchoice3"
                /><n-input
                  v-model:value="p3c1"
                  type="text"
                  class="form-field"
                  id="answerText1"
                  name="answerText1"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Answer Choice 1 for Question 3"
                />
              </div>
              <div class="answer">
                <input
                  type="radio"
                  value="2"
                  v-model="p3correct"
                  name="answerchoice3"
                /><n-input
                  v-model:value="p3c2"
                  type="text"
                  class="form-field"
                  id="answerText2"
                  name="answerText2"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Answer Choice 2 for Question 3"
                />
              </div>
              <div class="answer">
                <input
                  type="radio"
                  value="3"
                  v-model="p3correct"
                  name="answerchoice3"
                /><n-input
                  v-model:value="p3c3"
                  type="text"
                  class="form-field"
                  id="answerText3"
                  name="answerText3"
                  :input-props="{ type: 'clearable' }"
                  placeholder="Enter Answer Choice 3 for Question 3"
                />
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
import { NButton, NTabPane, NTabs, NSpace, NInput, NConfigProvider } from "naive-ui";
import { supabase } from "../supabase/init";
import { ref } from "vue";

export default {
  name: "NewDDS",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NSpace,
    NInput,
    NConfigProvider
  },
  setup() {
    return {
      //initialize user input variables for question
      value: ref(null),
      qid: ref(null),
      histAndPhys: ref(null),
      nurseNotes: ref(null),
      flowSheet: ref(null),
      labResults: ref(null),
      orders: ref(null),
      text: ref(null),
      questionp1: ref(null),
      p1c1: ref(null),
      p1c2: ref(null),
      p1c3: ref(null),
      p1correct: ref(null),
      questionp2: ref(null),
      p2c1: ref(null),
      p2c2: ref(null),
      p2c3: ref(null),
      p2correct: ref(null),
      questionp3: ref(null),
      p3c1: ref(null),
      p3c2: ref(null),
      p3c3: ref(null),
      p3correct: ref(null),
      rationale: ref(null),
    };
  },
  data() {
    return {
      themeOverrides: {
            common: {
                primaryColor: "#FF8C00"
            }
        }
    }
  },
  methods: {
    enterQuestion() {
     
      //save correct answer text to corAns variable for db - answer var is INT from radio buttons, save corresponding text into corAns variable
      var corAns = [];
      if (this.p1correct == 1) {
        corAns.push(this.p1c1);
      }
      if (this.p1correct == 2) {
        corAns.push(this.p1c2);
      }
      if (this.p1correct == 3) {
        corAns.push(this.p1c3);
      }
      if (this.p2correct == 1) {
        corAns.push(this.p2c1);
      }
      if (this.p2correct == 2) {
        corAns.push(this.p2c2);
      }
      if (this.p2correct == 3) {
        corAns.push(this.p2c3);
      }
      if (this.p3correct == 1) {
        corAns.push(this.p3c1);
      }
      if (this.p3correct == 2) {
        corAns.push(this.p3c2);
      }
      if (this.p3correct == 3) {
        corAns.push(this.p3c3);
      }

      //push new question to database (unused fields as empty)
      const addQ = async () => {
        try {
          let { data: successAdd, error } = await supabase
            .from("question")
            .insert([
              {
                quiz_id: this.qid,
                //all questions added from this page are dropdown sentence type
                type: "dds",
                hist_and_phys: this.histAndPhys,
                nurse_notes: this.nurseNotes,
                flow_sheet: this.flowSheet,
                lab_results: this.labResults,
                orders: this.orders,
                text: this.text,
                row_headers: [this.questionp1, this.questionp2, this.questionp3],
                correct_answers: corAns,
                answer_choice: [
                  [
                    { label: this.p1c1, value: this.p1c1 },
                    { label: this.p1c2, value: this.p1c2 },
                    { label: this.p1c3, value: this.p1c3 },
                  ],
                  [
                    { label: this.p2c1, value: this.p2c1 },
                    { label: this.p2c2, value: this.p2c2 },
                    { label: this.p2c3, value: this.p2c3 },
                  ],
                  [
                    { label: this.p3c1, value: this.p3c1 },
                    { label: this.p3c2, value: this.p3c2 },
                    { label: this.p3c3, value: this.p3c3 },
                  ],
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
  /* box-shadow: 10px 10px 5px #cac9c9; */
  margin: 25px 0;
}

a {
  text-decoration: none;
}
</style>
