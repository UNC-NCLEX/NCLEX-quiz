<template>
  <div class="student">
    <h1>
      Welcome {{ this.$store.state.user }}. Here is how you have done in your
      past quizzes:
    </h1>
    <div class="scores">
      <div class="centered" v-for="item in scores" :key="item.quiz">
        <div class="student__score__section">
          {{ item.title }}
        </div>
        <n-progress
          type="line"
          :percentage="item.score"
          :indicator-placement="'inside'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { NProgress } from "naive-ui";
export default {
  name: "StudentDashboard",
  props: {
    scores: Array,
    past_quizzes: Array,
  },
  components: {
    NProgress,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.student {
  color: black;
  text-align: center;
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
