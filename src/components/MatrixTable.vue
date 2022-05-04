<template>
  <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
    <div class="container">
      <div class="question">
        <div class="information">
          <!-- tab group for background information -->
          <n-tabs type="line">
            <n-tab-pane name="History and Physical" tab="History and Physical">
              {{ mt_question.hist_and_phys }}
            </n-tab-pane>
            <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
              {{ mt_question.nurse_notes }}
            </n-tab-pane>
            <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
              {{ mt_question.flow_sheet }}
            </n-tab-pane>
            <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
              {{ mt_question.lab_results }}
            </n-tab-pane>
            <n-tab-pane name="Orders" tab="Orders">
              {{ mt_question.orders }}
            </n-tab-pane>
          </n-tabs>
        </div>
        <h3>
          {{ mt_question.text }}
        </h3>
        <div>
          <n-table>
            <thead>
              <!-- for loop through row headers, loops for each row -->
              <th v-for="(item, index) in mt_question.row_headers" :key="index">
                <b>{{ mt_question.row_headers[index] }}</b>
              </th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in mt_question.answer_choice" :key="index">
                <td>{{ mt_question.answer_choice[index].row }}</td>
                <td v-for="index2 in 3" :key="index2 + item">
                  <n-checkbox :checked-value="index * 3 +index2" :unchecked-value="-1" @update:checked="handleUpdateChecked" size="large" />
                </td>
              </tr>
            </tbody>
          </n-table>
        </div>
      </div>
      <!-- display submit button OR rationale depending on if question has been submitted -->
      <div v-if="!this.$store.state.isSubmitted && !view_only">
        <n-button
          @click="checkAnswer"
          size="large"
          type="primary"
          color="#fdcb6e"
          text-color="black"
          class="button"
          >Submit</n-button
        >
      </div>
      <div v-else-if="this.$store.state.isSubmitted && !view_only">
        <RationalePopup
          :correct="this.$store.state.correct"
          :rationale="mt_question.rationale"
        />
      </div>
    </div>
  </n-config-provider>
</template>

<script>
import { NButton, NTabPane, NTabs, NTable, NCheckbox, NConfigProvider } from "naive-ui";
import { ref } from "vue";
import { useStore } from "vuex";
import RationalePopup from "../components/RationalePopup.vue";

export default {
  name: "MatrixTable",
  props: {
    //import mt_question as propp - immutable
    mt_question: Object,
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
    NCheckbox,
    RationalePopup,
    NConfigProvider
  },
  setup(props) {
    const choiceSelRef = ref([]);
    const store = useStore();
    //function to compare student response to correct answer array
    function ifSameArray(arr1, arr2) {
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
        // TODO:
        // check answer,
        // show rational,
        // and then update scores
        store.state.isSubmitted = true;
        if (
          ifSameArray(props.mt_question.correct_answers, choiceSelRef.value)
        ) {
          store.state.correct = "correct";
          store.state.numOfCorrectAnswers = store.state.numOfCorrectAnswers + 1;
          store.commit("UPDATE_SCORE");
        } else {
          store.state.correct = "incorrect";
        }
      },
      handleUpdateChecked(value) {
      value = value.toString();
        if(value != -1){
            choiceSelRef.value.push(value);
        } else {
            let selectedIndex = choiceSelRef.value.indexOf(value);
            choiceSelRef.value.splice(selectedIndex, 1);
        }
      }
    };
  },
  data() {
    return {
      themeOverrides: {
        common: {
          primaryColor: "#FF8C00",
        },
      }
    }
  }
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
  box-shadow: 10px 10px 5px #cac9c9;
  margin: 25px 0;
}
a {
  text-decoration: none;
}
</style>
