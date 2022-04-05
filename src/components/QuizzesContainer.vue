<template>
  <div class="quizzes">
    <h1>Content</h1>
    <div v-for="(item, index) in quizzes" :key="item.qid">
      <div class="quizzes__card">
        <div>{{ quizzes[index].name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizzesContainer",
  props: {
    quizzes: Array,
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
  box-shadow: -10px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
