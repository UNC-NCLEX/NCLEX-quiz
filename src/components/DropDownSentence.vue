<template>
  <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
    <div class="container">
      <div class="question">
        <div class="information">
          <!-- tab group for background information -->
          <n-tabs type="line">
            <n-tab-pane name="History and Physical" tab="History and Physical">
              {{ dds_question.hist_and_phys }}
            </n-tab-pane>
            <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
              {{ dds_question.nurse_notes }}
            </n-tab-pane>
            <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
              {{ dds_question.flow_sheet }}
            </n-tab-pane>
            <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
              {{ dds_question.lab_results }}
            </n-tab-pane>
            <n-tab-pane name="Orders" tab="Orders">
              {{ dds_question.orders }}
            </n-tab-pane>
          </n-tabs>
        </div>
        <h3>
          {{ dds_question.text }}
        </h3>
        <!-- for loop through row headers (contain beginning text for each sentence) -->
        <tr
          v-for="(item, index) in dds_question.row_headers"
          :key="'DDS' + index + item"
        >
          <!-- item = question sentence text (contained in row headers column from database) -->
          <h4 class="questions">
            {{ item }}
          </h4>
          <td>
            <n-space vertical>
              <!-- options for each dropdown from the answer_choice column in database -->
              <n-select
                @update:value="handleUpdateValue"
                @click="handleRepeat"
                :options="dds_question.answer_choice[index]"
                clearable
              />
            </n-space>
          </td>
        </tr>
      </div>
      <!-- display Submit button OR rationale based on if question has been submitted  -->
      <div v-if="!this.$store.state.isSubmitted && !view_only">
        <n-button size="large" @click="checkAnswer">Submit</n-button>
      </div>
      <div v-else-if="this.$store.state.isSubmitted && !view_only">
        <RationalePopup
          :correct="this.$store.state.correct"
          :rationale="dds_question.rationale"
        />
      </div>
    </div>
  </n-config-provider>
</template>

<script>
import { NButton, NTabPane, NTabs, NSelect, NConfigProvider } from "naive-ui";
import { ref } from "vue";
import { useStore } from "vuex";
import RationalePopup from "../components/RationalePopup.vue";

export default {
  name: "DropDownSentence",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NSelect,
    RationalePopup,
    NConfigProvider
  },
  props: {
    //currect question data passed in as a prop -> immutable
    dds_question: Object,
    view_only: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    //initialize store and student answer variables
    const choiceSelRef = ref([]);
    const store = useStore();
    const prev = ref("");
    //used to compare student answer with correct answer (no partial credit, arrays must fully match)
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
      //adjust student answer array if user changes choice selection
      handleUpdateValue(value) {
        if (choiceSelRef.value.includes(prev.value)) {
          choiceSelRef.value.splice(choiceSelRef.value.indexOf(prev.value), 1);
        }
        choiceSelRef.value.push(value);
      },
      handleRepeat(e) {
        prev.value = e.target.outerText;
      },
      checkAnswer() {
        store.state.isSubmitted = true;
        //check student answer and update score if correct
        if (
          ifSameArray(props.dds_question.correct_answers, choiceSelRef.value)
        ) {
          store.state.correct = "correct";
          store.state.numOfCorrectAnswers = store.state.numOfCorrectAnswers + 1;
          store.commit("UPDATE_SCORE");
        } else {
          store.state.correct = "incorrect";
        }
      },
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

/*****ANSWERS*****/
.answer {
  border: 1px #808080 solid;
  border-radius: 10px;
  margin: 0;
  margin-top: 10px;
}

.n-select {
  width: 250px;
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
