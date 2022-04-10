<template>
  <div class="quizzes">
    <h1>Content</h1>
    <div v-for="(item, index) in quizzes" :key="item.quiz_id">
      <button @click="navToQuiz" class="quizzes__card" :id="item.quiz_id">
        {{ quizzes[index].title }}
      </button>
    </div>
  </div>
</template>

<script>
// import { NButton } from "naive-ui";

export default {
  name: "QuizzesContainer",
  props: {
    quizzes: Array,
  },
  methods: {
    navToQuiz(e) {
      const selected_quiz_id = e.target.id;
      this.$store.state.currentQid = selected_quiz_id;
      console.log(e.target);
      this.$router.push(`/Quiz/${selected_quiz_id}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quizzes__card {
  width: 100%;
  min-height: 100px;
  margin-bottom: 20px;
  background: linear-gradient(180deg, #ff5c00 0%, #ff5c00 100%);
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 49px;
}
</style>
