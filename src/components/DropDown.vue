<template>
  <div class="container">
      <div class="information">
        <n-tabs type="line">
          <n-tab-pane name="History and Physical" tab="History and Physical">
            {{ddt_question.hist_and_phys}}
          </n-tab-pane>
          <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
            {{ddt_question.nurse_notes}}
          </n-tab-pane>
          <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
            {{ddt_question.flow_sheet}}
          </n-tab-pane>
          <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
            {{ddt_question.lab_results}}
          </n-tab-pane>
          <n-tab-pane name="Orders" tab="Orders">
            {{ddt_question.orders}}
          </n-tab-pane>
        </n-tabs>
      </div>
      <h4>
        {{ddt_question.text}}
      </h4>
      <div>
        <n-table>
          <thead>
            <th v-for="(header, index) in ddt_question.row_headers" :key="index">
              <b>{{ header }}</b>
            </th>
          </thead>
          <tbody>
            <tr v-for="rowIndex in ddt_question.num_rows-1" :key="rowIndex">
              <td>{{ ddt_question.answer_choice[0]['row0'][rowIndex-1]}}</td>
              <td class="options">
                <n-select
                  v-model="studentAnswer[rowIndex-1]"
                  :options="ddt_question.answer_choice[0]['row1']"
                  clearable
                />
              </td>
              <td class="options">
                <n-select
                  v-model="studentAnswer[rowIndex-1]"
                  :options="ddt_question.answer_choice[0]['row2']"
                  clearable
                />
              </td>
              <td v-if="ddt_question.answer_choice[0]['row3']!== null" class="options">
                <n-select
                  v-model="studentAnswer[rowIndex-1]"
                  :options="ddt_question.answer_choice[0]['row3']"
                  clearable
                />
              </td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>

    <div v-if="!this.$store.state.isSubmitted">
      <n-button size="large" @click="checkAnswer">Submit</n-button>
    </div>
    <div v-else>
      <RationalePopup
        :correct="this.$store.state.correct"
        :rationale="ddt_question.rationale"
      />
    </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NSelect, NTable } from "naive-ui";
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
    NTable,
    RationalePopup
  },
  props: {
    ddt_question: Object
  },
  methods: {
    getRowName(idx) {
      let rowN = "row{}"+idx;
      return rowN;
    }
  },
  data() {
    return {
      studentAnswer: []
    }
  },
  setup(props) {
    const checkedValue = ref("");
    const store = useStore();
    return {
            checkedValue: ref(null),
            handleChange(e) {
                checkedValue.value = e.target.value;
            },
            checkAnswer() {
                console.log(checkedValue.value);
                store.state.isSubmitted = true;
                if (
                    props.mc_question.correct_answers.includes(
                        this.studentAnswer
                    )
                ) {
                    console.log("correct");
                    store.state.correct = "correct";
                    store.state.numOfCorrectAnswers =
                        store.state.numOfCorrectAnswers + 1;
                    store.commit("UPDATE_SCORE");
                } else {
                    store.state.correct = "incorrect";
                }
            },
      value: ref(null)
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
</style>
