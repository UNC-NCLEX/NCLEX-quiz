<template>
  <div class="container">
    <div class="question">
      <div class="information">
        <!-- tab group for background information -->
        <n-tabs type="line">
          <n-tab-pane name="History and Physical" tab="History and Physical">
            {{ ht_question.hist_and_phys }}
          </n-tab-pane>
          <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
            {{ ht_question.nurse_notes }}
          </n-tab-pane>
          <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
            {{ ht_question.flow_sheet }}
          </n-tab-pane>
          <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
            {{ ht_question.lab_results }}
          </n-tab-pane>
          <n-tab-pane name="Orders" tab="Orders">
            {{ ht_question.orders }}
          </n-tab-pane>
        </n-tabs>
      </div>
      <h3>{{ ht_question.text }}</h3>
      <!-- question table -->
      <div>
        <n-table>
          <!-- for loop through row headers, loops for each row -->
          <tr>
            <th><b>{{ ht_question.row_headers[0]}}</b></th>
            <th colspan="2"><b>{{ ht_question.row_headers[1] }}</b></th>
          </tr>
          <tbody>
            <tr v-for="(item, index) in ht_question.answer_choice" :key="index">
              <td>{{ ht_question.answer_choice[index].row }}</td>
              <td>
                <div class="choice" @click="highlight" :data-id="ht_question.answer_choice[index].options[0].label">
                  {{ ht_question.answer_choice[index].options[0].label }}
                </div>
              </td>
              <td>
                <div class="choice" @click="highlight" :data-id="ht_question.answer_choice[index].options[1].label">
                  {{ ht_question.answer_choice[index].options[1].label }}
                </div>
              </td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>
    <!-- display submit button OR rationale depending on if question has been submitted -->
    <div v-if="!this.$store.state.isSubmitted && !view_only">
      <n-button size="large" @click="checkAnswer">Submit</n-button>
    </div>
    <div v-else-if="this.$store.state.isSubmitted && !view_only">
      <RationalePopup
        :correct="this.$store.state.correct"
        :rationale="ht_question.rationale"
      />
    </div>
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NTable } from "naive-ui";
import { ref } from "vue";
import { useStore } from "vuex";
import RationalePopup from "../components/RationalePopup.vue";

export default {
  name: "HighlightTable",
  props: {
    //ht_question imported as prop - immutable
    ht_question: Object,
    view_only: {
      default: false,
      type: Boolean,
    },
  },
  components: {
    NButton,
    NTabPane,
    NTabs,
    NTable,
    RationalePopup,
  },
  setup(props) {
    const choiceSelRef = ref([]);
    const store = useStore();
    //function used to compare student response to correct answer, no partial credit student answer must fully match
    function ifSameArray(arr1, arr2) {
      console.log(arr1);
      console.log(arr2);
      if (arr1.length !== arr2.length) return false;
      const arr1_sorted = arr1.sort();
      const arr2_sorted = arr2.sort();
      for (let i = 0; i < arr1.length; i++) {
        if (arr1_sorted[i] !== arr2_sorted[i]) return false;
      }
      return true;
    }
    return {
      choiceSel: choiceSelRef,
      checkAnswer() {
        store.state.isSubmitted = true;
        //check if answer is correct, if yes update score in store
        if (
          ifSameArray(props.ht_question.correct_answers, choiceSelRef.value)
        ) {
          console.log("correct");
          store.state.correct = "correct";
          store.state.numOfCorrectAnswers = store.state.numOfCorrectAnswers + 1;
          store.commit("UPDATE_SCORE");
        } else {
          store.state.correct = "incorrect";
        }
      },
      //handle changes to highlight values and update student answer array with changes
      highlight(e) {
        if (e.target.style.backgroundColor == "") {
          e.target.style.backgroundColor = "yellow"
          choiceSelRef.value.push(e.target.getAttribute("data-id"));
        } else {
          e.target.style.backgroundColor = "";
          choiceSelRef.value.splice(choiceSelRef.value.indexOf(e.target.getAttribute("data-id")), 1);
        }
        }
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
  border: none;
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

.choice {
  text-align: center;
  padding: 5px 0;
}

th:nth-child(2) {
  text-align: center;
}
</style>
