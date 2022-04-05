<template>
  <InstructorDash />
  <StudentRoster :students="this.$store.state.students" />
  <StudentDashboard
    :scores="scores"
    :past_quizzes="past_quizzes"
  ></StudentDashboard>
  <QuizzesContainer :quizzes="past_quizzes"></QuizzesContainer>
  <DropDownTable :columns="columns" :data="data"></DropDownTable>

  <MultipleChoice />
  <DropDown></DropDown>
  <DropDownSentence :dropdownSentQuestions="dropdownSentQuestions" :options="options"></DropDownSentence>
  <MultipleResponse />
  <MatrixTable />

  <RationalePopup/>
</template>

<script>
import { h } from "vue";
//import HelloWorld from './components/HelloWorld.vue'
import InstructorDash from "./components/InstructorDash.vue";
import StudentRoster from "./components/Roster.vue";
//import studentData from './components/studentData.js'
import StudentDashboard from "./components/StudentDashboard.vue";
import QuizzesContainer from "./components/QuizzesContainer.vue";
import DropDownTable from "./components/DropDownTable.vue";

import MultipleChoice from "./components/MultipleChoice.vue";
import DropDown from "./components/DropDown.vue";
import DropDownSentence from "./components/DropDownSentence.vue";
import MultipleResponse from "./components/MultipleResponse.vue";
import MatrixTable from "./components/MatrixTable.vue";

import RationalePopup from "./components/RationalePopup.vue";

import { NSelect } from "naive-ui";

export default {
  name: "App",
  components: {
    InstructorDash,
    StudentRoster,
    StudentDashboard,
    QuizzesContainer,
    DropDownTable,
    MultipleChoice,
    DropDown,
    DropDownSentence,
    MultipleResponse,
    MatrixTable,
    RationalePopup
  },
  data() {
    return {
      scores: [
        {
          qid: 1,
          score: 100,
        },
        {
          qid: 2,
          score: 70,
        },
        {
          qid: 3,
          score: 90,
        },
      ],
      past_quizzes: [
        {
          qid: 1,
          name: "Unit 1",
        },
        {
          qid: 2,
          name: "Unit 2",
        },
        {
          qid: 3,
          name: "Unit 3",
        },
      ],
      columns: [
        {
          key: "medication",
          title: "Medication",
        },
        {
          key: "DrugClassification",
          title: "Drug Classification",
          render() {
            return h(
              NSelect,
              {
                options: [
                  {
                    value: "option1",
                    label: "This is an example Medication",
                  },
                  {
                    value: "option2",
                    label: "This is an example Medicatioweqaen",
                  },
                  {
                    value: "option2",
                    label: "This is an example Medicatwearawrion",
                  },
                ],
              },
              {
                default: () => "her",
              }
            );
          },
        },
        {
          key: "ClientTeaching",
          title: "Client Teaching",
        },
      ],
      data: [
        {
          medication: "he4y",
          DrugClassification: ["hey", "hey"],
          ClientTeaching: "hey",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-left: 10%;
  padding-right: 10%;
  color: #2c3e50;

  margin-top: 60px;
  background-color: linear-gradient(
    172.4deg,
    #24a3ff 5.89%,
    #24a3ff 5.9%,
    #0038ff 91.52%
  );
}
.container {
  background-color: linear-gradient(
    172.4deg,
    #24a3ff 5.89%,
    #24a3ff 5.9%,
    #0038ff 91.52%
  );
}
</style>
