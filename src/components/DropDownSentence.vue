<template>
  <div class="container">
    <div class="header">
      <h1>Pharmacoloy &amp; Pathophysiology</h1>
      <p>Interactive tool to help you learn</p>
    </div>
    <h2>Week {{question.qid}} Review</h2>

    <div class="question">
      <h3>Question 3</h3>
      <div class="information">
        <n-tabs type="line">
          <n-tab-pane name="History and Physical" tab="History and Physical">
            {{question.histAndPhys}}
          </n-tab-pane>
          <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
            {{question.nurseNotes}}
          </n-tab-pane>
          <n-tab-pane name="Flow Sheet" tab="Flow Sheet">{{question.flowSheet}} </n-tab-pane>
          <n-tab-pane name="Laboratory Results" tab="Laboratory Results">
            {{question.labResults}}
          </n-tab-pane>
          <n-tab-pane name="Orders" tab="Orders">
            {{question.orders}}
          </n-tab-pane>
        </n-tabs>
      </div>
      <h4>
        Choose the most likely options for the information missing from the
        statements regarding absorption of intravenous medications by selecting
        from the list of options provided.
      </h4>
      <div>
        <tr>
          <h4 class="questions">{{ question.questionp1 }}...</h4>
          <td>
            <n-space vertical>
              <n-select
                v-model="p1"
                :options="[{label: question.p1choices[0], value: 1}, {label: question.p1choices[1], value: 2}, {label: question.p1choices[2], value: 3}]"
                clearable
              />
              </n-space>
          </td>
        </tr>
        <tr>
          <h4 class="questions">{{ question.questionp2 }}...</h4>
          <td>
            <n-space vertical>
              <n-select
                v-model="p2"
                :options="[{label: question.p2choices[0], value: 1}, {label: question.p2choices[1], value: 2}, {label: question.p2choices[2], value: 3}]"
                clearable
              />
              </n-space>
          </td>
        </tr>
        <tr>
          <h4 class="questions">{{ question.questionp3 }}...</h4>
          <td>
            <n-space vertical>
              <n-select
                v-model="p3"
                :options="[{label: question.p3choices[0], value: 1}, {label: question.p3choices[1], value: 2}, {label: question.p3choices[2], value: 3}]"
                clearable
              />
              </n-space>
          </td>
        </tr>
      </div>
    </div>
    <a href="RationalePopup.vue"><n-button size="large">Submit</n-button> </a>
  </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NSpace, NSelect } from "naive-ui";
import { ref } from "vue";

export default {
  name: "DropDownSentence",
  components: {
    NButton,
    NTabPane,
    NTabs,
    NSpace,
    NSelect,
  },computed: {
    question() {console.log(typeof this.$store.getters.questionNext); return this.$store.getters.questionNext
    }
  },
  setup() {
    return {
      value: ref(null),
      questions: [
        {
          name: "Absorption is the process of",
        },
        {
          name: "Intravenous medications are directly delivered to the",
        },
        {
          name: "Intravenous medications have",
        },
      ],

      options: [
        {
          label: "Answer 1",
          value: "Answer 1",
        },
        {
          label: "Answer 2",
          value: "Answer 2",
        },
        {
          label: "Answer 3",
          value: "Answer 3",
        },
        {
          label: "Answer 4",
          value: "Answer 4",
        },
        {
          label: "Answer 5",
          value: "Answer 5",
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
