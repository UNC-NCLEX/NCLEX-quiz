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
  <DropDown :drugs="drugs" :options="options"></DropDown>
  <DropDownSentence
    :dropdownSentQuestions="dropdownSentQuestions"
    :options="options"
  ></DropDownSentence>
  <RationalePopup />
</template>

<script>
import { ref } from "vue";
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
import RationalePopup from "./components/RationalePopup.vue";
import { supabase } from "./supabase/init";

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
    RationalePopup,
  },
  setup() {
    const data = ref([]);
    const dataLoaded = ref(null);

    const getData = async () => {
      try {
        let { data: question, error } = await supabase
          .from("question")
          .select("*");
        if (error) throw error;
        data.value = question;
        dataLoaded.value = true;
        console.log(data.value);
      } catch (error) {
        console.warn(error.message);
      }
    };
    getData();
    return { data, dataLoaded };
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
