<template>
<n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
  <div class="main">
    <div class="content">
      <div class="quiz">
        <h2>Quiz Management</h2>
      </div>
      <br>
      <div class="newQ">
            <h3> Creating a new quiz? Enter quiz name here: </h3>
            <n-input v-model:value="newQuizName" type="text" class="form-field" id="newQuizName" name="newQuizName" :input-props="{ type: 'clearable' }" placeholder="Enter New Quiz Name" />
            <div class="space"></div>
            <n-button size="large" @click="createQuiz">Add Quiz</n-button>
      </div>
      <br>
      <div class="qType">
        <h3> Creating a new question? Select question type here: </h3>
        <n-radio-group v-model:value="typeSelected" name="radiogroup">
            <!-- if typeSelected===1, multChoice; if typeSelected===2, selAll; etc... -->
            <n-radio :value=1 class="choice-text">Multiple Choice</n-radio>
            <n-radio :value=2 class="choice-text">Select All</n-radio>
            <n-radio :value=3 class="choice-text">DropDown Sentence</n-radio>
            <n-radio :value=4 class="choice-text">DropDown Table</n-radio>
            <n-radio :value=5 class="choice-text">Matrix Table</n-radio>
            <n-radio :value=6 class="choice-text">Highlight Table</n-radio>
        </n-radio-group>
        <div class="space"></div>
        <n-button size="large" @click="createQuestion">Create Question</n-button>   
      </div>      
    </div>
  </div>
</n-config-provider>
</template>
<script>
import { NButton, NInput, NRadio, NRadioGroup, NConfigProvider, useMessage } from "naive-ui";
import { supabase } from "../supabase/init";

export default {
  name: "QuestionSelect",
  components:{
      NButton,
      NInput,
      NRadio,
      NRadioGroup,
      NConfigProvider
  },
  props: {
    msg: String,
  },
  setup() {
    const message = useMessage();
    return {
      createSuccessMessage(msg, time) {
          message.success(msg, { duration: time });
      },
      createErrorMessage(msg, time) {
          message.error(msg, { duration: time });
      }
    }
  },
  data() {
    return {
      fields: [
        { key: "sid", sortable: true },
        { key: "qid1", sortable: true },
        { key: "qid2", sortable: true },
      ],
      scores: [
        { sid: 1, qid1: 90, qid2: 75 },
        { sid: 2, qid1: 95, qid2: 90 },
        { sid: 3, qid1: 75, qid2: 85 },
      ],
      newQuizName: "",
      typeSelected: 0,
      themeOverrides: {
          common: {
              primaryColor: "#FF8C00"
          }
      }
    };
  },
  methods: {
      async createQuiz(){
          const data = await supabase
          .from('quiz')
          .select('quiz_id');

          // TODO: Change the way in which the next ID is chosen.
          // This implementation can create problems if a quiz
          // is deleted.
          let next_id = Math.max(data.data.length) + 1;

          await supabase
          .from('quiz')
          .insert([
            { quiz_id: next_id, title: this.newQuizName }
          ]);

          this.createSuccessMessage("Success! New quiz was created!", 10000);
      },
      async createQuestion(){
        const data = await supabase
          .from('quiz')
          .select('*');

        console.log(data);

        /*TODO router to correct page - all need :quizzes prop passed in as all current quizzes in databases when routed - pages use quiz.name and quiz.qid*/
        switch (this.typeSelected) {
          case 0:
            this.createErrorMessage("Please select a question type.");
            break;
          case 1:
            // Multiple Choice
            this.$router.push({name: "NewMultChoice", params: { quizzes: data.data }});
            break;
          case 2:
            // Select All
            this.$router.push({name: "NewSelectAll", params: { quizzes: data.data }});
            break;
          case 3:
            // DropDown Sentence
            this.$router.push({name: "NewDDS", params: { quizzes: data.data }});
            break;
          case 4:
            // DropDown Table
            break;
          case 5:
            // Matrix Table
            this.$router.push({name: "NewMatrix", params: { quizzes: data.data }});
            break;
          case 6:
            // Highlight
            this.$router.push({name: "NewHighlight", params: { quizzes: data.data }});
            break;
          }
          console.log("new question"+ this.typeSelected)
      }
  }
};
</script>

<style scoped>
.main {
  font-family: "Montserrat";
}
.top {
  background-color: #0094ff;
  padding-top: 5%;
  padding-bottom: 3%;
}
.content {
  background: white;
  justify-content: center;
  padding: 10px;
  padding-top: 3%;
  padding-left: 10%;
  padding-right: 10%;
  width: auto;
  margin: auto;
  margin-bottom: 15px;
  align-content: center;
  text-align: center;
}
.quiz {
  text-align: center;
  padding: 10px;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  background: linear-gradient(172.4deg, #24A3FF 5.89%, #24A3FF 5.9%, #0038FF 91.52%);
  border-radius: 5%;
  box-shadow: 10px 10px 5px #cac9c9;
}
.n-radio {
  border: 1px #808080 solid;
  box-shadow: 10px 10px 5px #cac9c9;
  border-radius: 10px;
  width: 72vw;
  padding: 20px 1.5vw;
  margin-top: 10px;
}
h2 {
  color: white;
  font-weight: 900;
  text-align: center;
  padding: 10px;
  margin: 5px;
  margin-left: 10%;
  margin-right: 10%;
}
h3 {
  text-align: center;
}
.n-button {
  background-color: #ffc633;
}
h1 {
  color: white;
}
table {
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  padding: 5px;
}
th,
td {
  border: 1px solid black;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
}

router-link,
a {
  color: rgb(75, 85, 97);
  text-decoration: underline;
}

.space {
  margin-bottom: 20px;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat);
</style>
