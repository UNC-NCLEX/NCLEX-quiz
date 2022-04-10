<template lang="">
  <div id="quiz">
    <TopHeader />
    <h1>Quiz</h1>
  </div>
</template>
<script>
import TopHeader from "../components/Header.vue";
import { ref } from "vue";
import { supabase } from "../supabase/init";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "QuizMain",
  components: { TopHeader },
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
          .eq("quiz_id", qid.value);
        if (error) throw error;
        allQuestions.value = questions;
        currentQuestion.value = allQuestions.value[0];
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
#quiz {
  background: linear-gradient(
    172.4deg,
    #24a3ff 5.89%,
    #24a3ff 5.9%,
    #0038ff 91.52%
  );
}
</style>
