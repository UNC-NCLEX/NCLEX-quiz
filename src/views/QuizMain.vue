<template lang="">
  <div id="quiz">
    <h1>{{ currentQuestion.text }}</h1>
    <div id="question">
      <div v-if="currentQuestion.type === 'mc'">
        <h1>mc</h1>
      </div>
      <div v-else-if="currentQuestion.type === 'select'">
        <h1>select</h1>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "QuizMain",
  setup() {
    const store = useStore();
    const allQuestions = ref([]);
    let currentQuestion = ref(null);
    const qid = computed(() => store.state.currentQid);
    const getAllQuestions = async () => {
      // get all Questions from a specific quiz that the user selected
      try {
        console.log(qid.value);
        let { data: questions, error } = await supabase
          .from("question")
          .select("*")
          .eq("quiz_id", qid.value)
          .order("qid", { ascending: true });
        if (error) throw error;
        allQuestions.value = questions;
        console.log(allQuestions.value);
        currentQuestion.value = allQuestions.value[0];
        console.log(currentQuestion.value);
      } catch (error) {
        console.warn(error.message);
      }
    };
    getAllQuestions();
    return { allQuestions, currentQuestion };
  },
};
</script>
<style>

</style>
