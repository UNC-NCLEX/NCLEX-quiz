<template>
  <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
    <div class="container">
      <div class="question">
        <div class="information">
          <!-- tab group for background information -->
          <n-tabs type="line">
            <n-tab-pane name="History and Physical" tab="History and Physical">
              {{ mr_question.hist_and_phys }}
            </n-tab-pane>
            <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
              {{ mr_question.nurse_notes }}
            </n-tab-pane>
            <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
              {{ mr_question.flow_sheet }}</n-tab-pane
            >
            <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
              {{ mr_question.lab_results }}
            </n-tab-pane>
            <n-tab-pane name="Orders" tab="Orders">
              {{ mr_question.orders }}
            </n-tab-pane>
          </n-tabs>
        </div>
        <h3>
          {{ mr_question.text }}
        </h3>
        <!-- choiceSel models student selected answers -->
        <n-checkbox-group v-model:value="choiceSel" name="radiogroup">
          <!-- for loop to display all answer choices -->
          <n-checkbox
            v-for="(item, index) in mr_question.answer_choice"
            :key="item + index"
            :value="item"
            :label="item"
          >
          </n-checkbox>
        </n-checkbox-group>
      </div>
      <!--rational popup component only displays after question is submitted (if isSubmitted). if not submitted then submit button displays-->
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
          :rationale="mr_question.rationale"
        />
      </div>
    </div>
  </n-config-provider>
</template>

<script>
import { NButton, NCheckbox, NCheckboxGroup, NTabPane, NTabs, NConfigProvider } from "naive-ui";
import { ref } from "vue";
import { useStore } from "vuex";
import RationalePopup from "../components/RationalePopup.vue";

export default {
  name: "MultipleResponse",
  props: {
    //currect question data passed in as a prop -> immutable
    mr_question: Object,
    view_only: {
      default: false,
      type: Boolean,
    },
  },
  components: {
    NButton,
    NCheckbox,
    NCheckboxGroup,
    NTabPane,
    NTabs,
    RationalePopup,
    NConfigProvider
  },
  setup(props) {
    const choiceSelRef = ref([]);
    const store = useStore();
    //compare if all chosen answers are correct return true else false - no partial credit
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
        //set as true so rationale popup displays for question
        store.state.isSubmitted = true;
        if (
          ifSameArray(props.mr_question.correct_answers, choiceSelRef.value)
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
.n-checkbox {
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
