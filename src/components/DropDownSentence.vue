<template>
  <div class="hello">
    <div class="header">
      <h1>Pharmacoloy &amp; Pathophysiology</h1>
      <p>Interactive tool to help you learn</p>
    </div>
    <h2>Week 1 Review</h2>

    <div class="question">
      <h3>Question 3</h3>
      <div class="information">
        <n-tabs type="line">
          <n-tab-pane name="History and Physical" tab="History and Physical">
            A patient is presented to the emergency department with unexplained
            fever, diarrhea (6 loose stools within 4 hours) and extreme fatigue
            at 7AM.
          </n-tab-pane>
          <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
            On assessment, the patient’s temperature is 101 degree Fahrenheit.
          </n-tab-pane>
          <n-tab-pane name="Flow Sheet" tab="Flow Sheet"> </n-tab-pane>
          <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
            Hemoglobin level is 6.8mg/dL
          </n-tab-pane>
          <n-tab-pane name="Orders" tab="Orders">
            Tylenol 650 mg by mouth once; administer antidiarrheal medication
            once and administer one unit of packed RBC
          </n-tab-pane>
        </n-tabs>
      </div>
      <h4>
        Choose the most likely options for the information missing from the
        statements regarding absorption of intravenous medications by selecting
        from the list of options provided.
      </h4>
      <div>
        <tr v-for="(item, index) in dropdownSentQuestions" :key="index">
          <h4 class="questions">
            {{ dropdownSentQuestions[index].name }} ... ... ... ...
          </h4>
          <td>
            <n-space vertical>
              <n-select
                v-model:value="value"
                :options="options"
                clearable
                :consistent-menu-width="false"
              />
            </n-space>
          </td>
        </tr>
      </div>
    </div>
    <a href="RationalePopup.vue"><n-button size="large">Submit</n-button> </a>
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NSpace, NSelect } from "naive-ui";

export default {
  name: "DropDownSentence",
  props: {
    dropdownSentQuestions: Array,
    options: Array,
  },
  components: {
    NButton,
    NTabPane,
    NTabs,
    NSpace,
    NSelect,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #2094ff;
  color: white;
  width: 100%;
}

.information {
  border: 1px #808080 solid;
  padding: 35px;
  margin: 35px 0;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #cac9c9;
}

h2 {
  color: #fe4400;
}

a {
  text-decoration: none;
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

.hello {
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

.dropdown,
.n-select {
  background-color: white;
  width: 250px;
}
</style>
