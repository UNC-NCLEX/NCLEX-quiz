<template>
  <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
    <div class="container">
      <h2>New Matrix Table Question</h2>
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
        <h3>Question Information</h3>
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
        <br />
        <br />
        <div>
          <n-table>
            <thead>
              <th>
                <n-input
                  v-model:value="rowText"
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
                  v-model:value="rowText"
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
                  v-model:value="rowText"
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
                  v-model:value="rowText"
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
                    v-model:value="rowText"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Question Text"
                  />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
              </tr>
              <tr>
                <td>
                  <n-input
                    v-model:value="rowText"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Question Text"
                  />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
              </tr>
              <tr>
                <td>
                  <n-input
                    v-model:value="rowText"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Question Text"
                  />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
              </tr>
              <tr>
                <td>
                  <n-input
                    v-model:value="rowText"
                    type="text"
                    class="form-field"
                    id="questText"
                    name="questText"
                    :input-props="{ type: 'clearable' }"
                    placeholder="Enter Question Text"
                  />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
                <td>
                  <n-checkbox v-model="value" size="large" />
                </td>
              </tr>
            </tbody>
          </n-table>
          <br />
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
  NCheckbox,
  NInput,
  NConfigProvider,
} from "naive-ui";

import { ref } from "vue";

export default {
  name: "NewMatrix",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NTable,
    NCheckbox,
    NInput,
    NConfigProvider,
  },
  setup() {
    return {
      value: ref(null),
      methods: {
        enterQuestion() {
          var newQ = {
            qid: this.qid,
            histAndPhys: this.histAndPhys,
            nurseNotes: this.nurseNotes,
            flowSheet: this.flowSheet,
            labResults: this.labResults,
            orders: this.orders,
            questText: this.questText,
            rowText: this.rowText,
            a1: this.answerText1,
            a2: this.answerText2,
            a3: this.answerText3,
            a4: this.answerText4,
            a5: this.answerText5,
            rationale: this.rationale,
          };
          console.log(newQ);
          this.$store.dispatch("newMatrix", newQ);
        },
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
