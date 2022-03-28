<template>
  <div class="hello">
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
      <div>
        <div class="answer">
          <n-radio value="answer1" name="answer1" @change="handleChange"
            >Hemoglobin level of 6.5mg/dl</n-radio
          >
        </div>
        <div class="answer">
          <n-radio value="answer2" name="answer2" @change="handleChange"
            >Hemoglobin level of 6.2mg/dl</n-radio
          >
        </div>
        <div class="answer">
          <n-radio value="answer3" name="answer3" @change="handleChange"
            >Hemoglobin level of 11mg/dl</n-radio
          >
        </div>
        <div class="answer">
          <n-radio value="answer4" name="answer4" @change="handleChange"
            >Hemoglobin level of 6.3 mg/dl</n-radio
          >
        </div>
        <div class="answer">
          <n-radio value="answer5" name="answer5" @change="handleChange"
            >Hemoglobin level of 5mg/dl</n-radio
          >
        </div>
      </div>

      <!-- <n-radio >{{song.label}} </n-radio> -->
    </div>

    <n-button size="large">Submit</n-button>
    <!-- <div id="demo"></div> -->
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NRadio } from "naive-ui";
// import { defineComponent, ref } from "vue";

export default {
  name: "MultipleChoice",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NRadio,
  },
};

// document.getElementByClass("n-button").addEventListener("click", displayMessage);
// function displayMessage() {
//   document.getElementById("demo").innerHTML = "Rationale:"
// }

// export class defineComponent({
//   setup() {
//     return {
//       value: ref(null),
//       songs: [
//         {
//           value: "Rock'n'Roll Star",
//           label: "Rock'n'Roll Star"
//         },
//         {
//           value: "Shakermaker",
//           label: "Shakermaker"
//         },
//         {
//           value: "Live Forever",
//           label: "Live Forever"
//         },
//         {
//           value: "Up in the Sky",
//           label: "Up in the Sky"
//         },
//         {
//           value: "...",
//           label: "..."
//         }
//       ].map((s) => {
//         s.value = s.value.toLowerCase();
//         return s;
//       })
//     };
//   }
// });
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
}

h2 {
  color: #fe4400;
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
</style>
