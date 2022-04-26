<template>
  <div class="container">
    <h1 class="question__info">Please select a quiz from the dropdown list</h1>
    <n-select
      v-model:value="quizSelect"
      placeholder="Please select a quiz to view:"
      :options="quizzes"
      name="select"
      class="question__select"
      @update:value="handleUpdateValue"
    >
    </n-select>
    <div
      id="question"
      v-for="(item, index) in questions"
      :key="'QuizInstructor' + item.qid"
    >
      <h1 class="question__number">Question {{ index + 1 }}</h1>
      <div v-if="item.type === 'mc'">
        <MultipleChoice :mc_question="item" :view_only="true"></MultipleChoice>
      </div>
      <div v-if="item.type === 'select'">
        <MultipleResponse
          :mr_question="item"
          :view_only="true"
        ></MultipleResponse>
      </div>
      <div v-if="item.type === 'ht'">
        <HighlightTable 
        :ht_question="item" 
        :view_only="true"
        ></HighlightTable>
      </div>
         <div v-if="item.type === 'mt'">
        <MatrixTable 
        :mt_question="item" 
        :view_only="true"
        ></MatrixTable>
      </div>
    </div>
  </div>
</template>
<script>
import { useMessage, NSelect } from "naive-ui";
import { ref } from "vue";
import { supabase } from "../supabase/init";
import MultipleChoice from "../components/MultipleChoice.vue";
import MultipleResponse from "../components/MultipleResponse.vue";
import HighlightTable from "../components/HighlightTable.vue";
import MatrixTable from "../components/MatrixTable.vue";

export default {
  name: "ViewAllQuizzes",
  components: {
    NSelect,
    MultipleChoice,
    MultipleResponse,
    HighlightTable,
    MatrixTable
  },
  setup() {
    const message = useMessage();
    const quizSelectRef = ref("");
    const quizzesRef = ref([]);
    const questionsRef = ref([]);
    const getQuizzes = async () => {
      // TODO: get user's past quizzes in an array
      // get the user's scores
      try {
        let { data: quiz, error } = await supabase.from("quiz").select("*");
        if (error) throw error;
        const quizzes = quiz.map((obj) => ({
          label: obj.title,
          value: obj.quiz_id,
        }));
        quizzesRef.value = quizzes;
      } catch (error) {
        message.error(error.message);
      }
    };
    const handleUpdateValue = async () => {
      try {
        let { data: questions, error } = await supabase
          .from("question")
          .select("*")
          .eq("quiz_id", quizSelectRef.value);
        if (error) throw error;
        console.log(questions);
        questionsRef.value = questions;
      } catch (error) {
        message.error(error.message);
      }
    };
    getQuizzes();
    return {
      quizSelect: quizSelectRef,
      quizzes: quizzesRef,
      questions: questionsRef,
      handleUpdateValue,
    };
  },
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
}

.question__number {
  text-align: center;
}

.question__select {
  width: 50%;
}
</style>
