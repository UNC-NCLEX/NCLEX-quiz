<template>
  <div class="container">
    <div class="header">
      <h1>Pharmacoloy &amp; Pathophysiology</h1>
      <p>Interactive tool to help you learn</p>
    </div>
    <h2>Week 1 Review</h2>
    <div class="question">
      <h3>Question 1</h3>
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
        Which of the following assessment findings indicates the therapeutic
        effect of blood transfusion?
      </h4>
      <n-radio-group v-model:value="value" name="radiogroup">
        <n-radio
          v-for="choice in choices"
          :key="choice.value"
          :value="choice.value"
        >
          <div class="choice-text">{{ choice.label }}</div>
        </n-radio>
      </n-radio-group>
    </div>
    <n-button size="large">Submit</n-button>
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NRadio, NRadioGroup } from "naive-ui";
import { ref } from "vue";

export default {
  name: "MultipleChoice",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NRadio,
    NRadioGroup,
  },
  setup() {
    return {
      value: ref(null),
      choices: [
        {
          value: "Hemoglobin level of 6.5mg/dl",
          label: "Hemoglobin level of 6.5mg/dl",
        },
        {
          value: "Hemoglobin level of 6.2mg/dl",
          label: "Hemoglobin level of 6.2mg/d",
        },
        {
          value: "Hemoglobin level of 11mg/dl",
          label: "Hemoglobin level of 11mg/dl",
        },
        {
          value: "Hemoglobin level of 6.3 mg/dl",
          label: "Hemoglobin level of 6.3 mg/dl",
        },
        {
          value: "Hemoglobin level of 5mg/d",
          label: "Hemoglobin level of 5mg/d",
        },
      ].map((s) => {
        s.value = s.value.toLowerCase();
        return s;
      }),
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

/*****HEADER/TITLE*****/
.header {
  background-color: #2094ff;
  color: white;
  width: 100%;
}
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
.n-radio {
  border: 1px #808080 solid;
  box-shadow: 10px 10px 5px #cac9c9;
  border-radius: 10px;
  width: 72vw;
  padding: 20px 1.5vw;
  margin-top: 10px;
}

.choice-text {
  padding: 0 10px;
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
