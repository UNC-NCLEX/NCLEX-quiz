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
        Which of the following assessment findings indicates the therapeutic
        effect of blood transfusion?
      </h4>
      <div>
        <table style="width: 100%">
          <tr>
            <th>Medication</th>
            <th>Drug Calssification</th>
            <th>Client Teaching</th>
          </tr>
          <tr>
            <td>Drug 1</td>
            <td>choice</td>
            <td>choice</td>
          </tr>
          <tr>
            <td>Drug 2</td>
            <td>14</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Drug 3</td>
            <td>choice</td>
            <td>choice</td>
          </tr>
        </table>

        <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <n-button> Go For a Trip </n-button>
        </n-dropdown>
      </div>

      <!-- <n-radio >{{song.label}} </n-radio> -->
    </div>

    <n-button size="large">Submit</n-button>

  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NDropdown } from "naive-ui";
// import {defineComponent} from 'data.js';
import { defineComponent } from "vue";
import { useMessage } from "naive-ui";

export default {
  name: "DropDownSentence",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NDropdown
  },
  mounted() {
    defineComponent({
      setup() {
        const message = useMessage();
        return {
          options: [
            {
              label: "Marina Bay Sands",
              key: "marina bay sands",
              disabled: true,
            },
            {
              label: "Brown's Hotel, London",
              key: "brown's hotel, london",
            },
            {
              label: "Atlantis Bahamas, Nassau",
              key: "atlantis nahamas, nassau",
            },
            {
              label: "The Beverly Hills Hotel, Los Angeles",
              key: "the beverly hills hotel, los angeles",
            },
          ],
          handleSelect(key) {
            message.info(String(key));
          },
        };
      },
    });
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
