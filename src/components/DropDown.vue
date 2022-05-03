<template>
  <div class="container">
    <div class="information">
      <!-- tab group for background information -->
      <n-tabs type="line">
        <n-tab-pane name="History and Physical" tab="History and Physical">
          {{ ddt_question.hist_and_phys }}
        </n-tab-pane>
        <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
          {{ ddt_question.nurse_notes }}
        </n-tab-pane>
        <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
          {{ ddt_question.flow_sheet }}
        </n-tab-pane>
        <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
          {{ ddt_question.lab_results }}
        </n-tab-pane>
        <n-tab-pane name="Orders" tab="Orders">
          {{ ddt_question.orders }}
        </n-tab-pane>
      </n-tabs>
    </div>
    <h3>
      {{ ddt_question.text }}
    </h3>
    <table class="table">
      <thead>
        <!-- for loop through row headers -->
        <th v-for="(header, index) in ddt_question.row_headers" :key="index">
          <b>{{ header }}</b>
        </th>
      </thead>
      <tbody>
        <!--table row 1-->
        <tr class="row">
          <td>{{ ddt_question.answer_choice[0]["row0"][0] }}</td>
          <td>
            <n-select
              v-model:value="p1c1"
              :options="ddt_question.answer_choice[0]['row1']"
            />
          </td>
          <td>
            <n-select
              v-model:value="p1c2"
              :options="ddt_question.answer_choice[0]['row2']"
            />
          </td>
        </tr>
        <!--table row 2-->
        <tr class="row">
          <td>{{ ddt_question.answer_choice[0]["row0"][1] }}</td>
          <td>
            <n-select
              v-model:value="p2c1"
              :options="ddt_question.answer_choice[0]['row1']"
            />
          </td>
          <td>
            <n-select
              v-model:value="p2c2"
              :options="ddt_question.answer_choice[0]['row2']"
            />
          </td>
        </tr>
        <!--table row 3 only displays if row 3 question-->
        <tr v-if="ifRow3" class="row">
          <td>{{ ddt_question.answer_choice[0]["row0"][2] }}</td>
          <td>
            <n-select
              v-model:value="p3c1"
              :options="ddt_question.answer_choice[0]['row1']"
            />
          </td>
          <td>
            <n-select
              v-model:value="p3c2"
              :options="ddt_question.answer_choice[0]['row2']"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- display submit button OR rationale depending on if question is submitted -->
  <div v-if="!this.$store.state.isSubmitted && !view_only">
    <n-button size="large" @click="checkAnswer">Submit</n-button>
  </div>
  <div v-else-if="this.$store.state.isSubmitted && !view_only">
    <RationalePopup
      :correct="this.$store.state.correct"
      :rationale="ddt_question.rationale"
    />
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NSelect } from "naive-ui";
import { useStore } from "vuex";
import { ref } from "vue";
import RationalePopup from "../components/RationalePopup.vue";

export default {
  name: "DropDown",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NSelect,
    RationalePopup,
  },
  props: {
    //ddt_question as a prop - immutable
    ddt_question: Object,
    view_only: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    //initialze store and student answer variables
    const store = useStore();
    const p1c1Ref = ref("");
    const p1c2Ref = ref("");
    const p2c1Ref = ref("");
    const p2c2Ref = ref("");
    const p3c1Ref = ref("");
    const p3c2Ref = ref("");
    const ifRow3Ref = props.ddt_question.answer_choice[0]["row0"][2] != null;
    //function to compare student answer with correct answer
    function ifSameArray(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    return {
      p1c1: p1c1Ref,
      p1c2: p1c2Ref,
      p2c1: p2c1Ref,
      p2c2: p2c2Ref,
      p3c1: p3c1Ref,
      p3c2: p3c2Ref,
      ifRow3: ifRow3Ref,
      checkAnswer() {
        //array of student answers by row and column (p1c2 is row 1 column 2, etc.)
        let studentAnswer = [
          p1c1Ref.value,
          p1c2Ref.value,
          p2c1Ref.value,
          p2c2Ref.value,
        ];
        //if 3rd row, add row 3 variables to student answer array (only if row 3 prevents comparing nulls to correct ans array)
        if (props.ddt_question.correct_answers.length > 4) {
          studentAnswer.push(p3c1Ref.value);
          studentAnswer.push(p3c2Ref.value);
        }
        store.state.isSubmitted = true;
        //if student answer is correct, update score
        if (ifSameArray(props.ddt_question.correct_answers, studentAnswer)) {
          store.state.correct = "correct";
          store.state.numOfCorrectAnswers = store.state.numOfCorrectAnswers + 1;
          store.commit("UPDATE_SCORE");
        } else {
          store.state.correct = "incorrect";
        }
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

.table {
  text-align: left;
  min-width: 40%;
}
</style>
