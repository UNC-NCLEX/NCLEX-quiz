<template>
  <div class="container">
    <div class="header">
      <h1>Pharmacoloy &amp; Pathophysiology</h1>
      <p>Interactive tool to help you learn</p>
    </div>
    <h2>Week 1 Review</h2>

    <div class="question">
      <h3>Question 2</h3>
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
        <n-table>
          <thead>
            <th v-for="(item, index) in categories" :key="index">
              <b>{{ categories[index].name }}</b>
            </th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in medication" :key="index">
              <td>{{ medication[index].name }}</td>
              <td class="options">
                <n-select
                  v-model="options[index].value"
                  :options="options"
                  clearable
                />
              </td>
              <td>
                <n-select
                  v-model="options2[index].value"
                  :options="options2"
                  clearable
                />
              </td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>

    <a href="RationalePopup.vue"><n-button size="large">Submit</n-button> </a>
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NSelect, NTable } from "naive-ui";

import { ref } from "vue";

export default {
  name: "DropDown",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NSelect,
    NTable,
  },
  setup() {
    return {
      value: ref(null),
      categories: [
        {
          name: "Medication",
        },
        {
          name: "Drug Classification",
        },
        {
          name: "Client Teaching",
        },
      ],

      medication: [
        {
          name: "Medication 1",
        },
        {
          name: "Medication 2",
        },
        {
          name: "Medication 3",
        },
      ],
      options: [
        {
          label: "Classification 1",
          value: "Classification 1",
        },
        {
          label: "Classification 2",
          value: "Classification 2",
        },
        {
          label: "Classification 3",
          value: "Classification 3",
        },
        {
          label: "Classification 4",
          value: "Classification 4",
        },
        {
          label: "Classification 5",
          value: "Classification 5",
        },
      ],
      options2: [
        {
          label: "Teaching 1",
          value: "Teaching 1",
        },
        {
          label: "Teaching 2",
          value: "Teaching 2",
        },
        {
          label: "Teaching 3",
          value: "Teaching 3",
        },
        {
          label: "Teaching 4",
          value: "Teaching 4",
        },
        {
          label: "Teaching 5",
          value: "Teaching 5",
        },
      ],
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

/*****TABLE*****/
.n-table {
  box-shadow: 10px 10px 5px #cac9c9;
}

/*****ANSWERS******/
.options {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
