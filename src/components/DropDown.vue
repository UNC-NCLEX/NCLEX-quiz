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
        <table class="table">
          <thead>
            <th v-for="(header, index) in ddt_question.row_headers" :key="index">
              <b>{{ header }}</b>
            </th>
          </thead>
          <tbody>
            <!--table row 1-->
            <tr>
              <td>{{ ddt_question.answer_choice[0]['row0'][0]}}</td>
              <td>
                <n-select
                  v-model="p1c1"
                  :options="ddt_question.answer_choice[0]['row1']"
                  clearable
                />
              </td>
              <td>
                <n-select
                  v-model="p1c2"
                  :options="ddt_question.answer_choice[0]['row2']"
                  clearable
                />
              </td>
            </tr>
            <!--table row 2-->
            <tr>
              <td>{{ ddt_question.answer_choice[0]['row0'][1]}}</td>
              <td>
                <n-select
                  v-model="p2c1"
                  :options="ddt_question.answer_choice[0]['row1']"
                  clearable
                />
              </td>
              <td>
                <n-select
                  v-model="p2c2"
                  :options="ddt_question.answer_choice[0]['row2']"
                  clearable
                />
              </td>
            </tr>
            <!--table row 3 only displays if row 3 question-->
            <div v-if="isRow3">
            <tr>
              <td>{{ ddt_question.answer_choice[0]['row0'][2]}}</td>
              <td>
                <n-select
                  v-model="p3c1"
                  :options="ddt_question.answer_choice[0]['row1']"
                  clearable
                />
              </td>
              <td>
                <n-select
                  v-model="p3c2"
                  :options="ddt_question.answer_choice[0]['row2']"
                  clearable
                />
              </td>
            </tr>
            </div>
          </tbody>
        </table>
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
    RationalePopup
  },
  props: {
    ddt_question: Object
  },
  methods: {
    ifRow3(){
      if(this.ddt_question.answer_choice[0]["row0"][2]===null){
        return false;
      }else{return true;}
    }
  },
  data() {
    return {
      studentAnswer: []
    }
  },
  setup(props) {
    //initialze store and student answer variables
    const checkedValue = ref("");
    const p1c1 = ref("");
    const p1c2 = ref("");
    const p2c1 = ref("");
    const p2c2 = ref("");
    const p3c1 = ref("");
    const p3c2 = ref("");
    const store = useStore();
    return {
            checkedValue: ref(null),
            handleChange(e) {
                checkedValue.value = e.target.value;
            },
            checkAnswer() {
                let studentAnswer = [p1c1, p1c2, p2c1, p2c2, p3c1, p3c2]
                let correct = true;
                store.state.isSubmitted = true;
                //check if student answers match correct
                for(let i = 0; i < props.ddt_question.correct_answers.length; i++) {
                    if(studentAnswer[i]!==props.ddt_question.correct_answers[i]){
                      correct = false;
                    }}
                if (correct)
                {
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

.table{
  width:80%;
}
</style>
