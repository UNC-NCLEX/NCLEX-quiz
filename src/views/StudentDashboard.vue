<template>
  <div class="student">
    {{ quizzes }}
    <div class="content">
      <h1>
        Welcome {{ this.$store.state.user.name }}. Here is how you have done in
        your past quizzes:
      </h1>
      <div class="scores">
        <div class="centered" v-for="item in scores" :key="item.id">
          <p class="student__score__section">
            {{ item.title }}
          </p>
          <n-progress
            type="line"
            :percentage="item.score"
            :indicator-placement="'inside'"
          />
        </div>
      </div>
      <QuizzesContainer :quizzes="quizzes"></QuizzesContainer>
    </div>
  </div>
</template>

<script>
import { NProgress } from "naive-ui";
import { ref } from "vue";
import { supabase } from "../supabase/init";
import { useStore } from "vuex";
import { computed } from "vue";
import QuizzesContainer from "../components/QuizzesContainer.vue";

export default {
  name: "StudentDashboard",
  components: {
    NProgress,
    QuizzesContainer,
  },
  setup() {
    const store = useStore();
    const quizzes = ref([]);
    const scores = ref([]);
    const question = ref([]);
    const dataLoaded = ref(null);
    const count = computed(() => store.state.user);
    const getData = async () => {
      // TODO: get user's past quizzes in an array
      // get the user's scores
      try {
        let { data: score, error } = await supabase
          .from("scores")
          .select("*")
          .eq("user", count.value.id);
        if (error) throw error;
        const completed_quizzes = score.map((x) => x.quiz);
        scores.value = score;

        let { data: quiz, error2 } = await supabase
          .from("quiz")
          .select("*")
          .not("quiz_id", "in", `(${completed_quizzes})`);
        if (error) throw error2;
        quizzes.value = quiz;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
    };
    getData();
    return { count, quizzes, scores, dataLoaded, question };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.student {
  color: black;
  text-align: center;
}
.content {
  background: white;
  padding-left: 10%;
  padding-right: 10%;
}
.student__score__section {
  font-size: 1.5rem;
}
.student__score {
  font-weight: 700;
}
.centered {
  justify-content: center;
  align-items: center;
  text-align: left;
  padding-bottom: 2%;
}
.scores {
  padding: 5%;
  box-shadow: -10px 4px 6px rgba(0, 0, 0, 0.25);
  margin-bottom: 5%;
}
</style>
