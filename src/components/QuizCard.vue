<template lang="">
  <div>
    <n-space>
      <n-progress type="circle" :percentage="percentage" />
      <n-progress type="circle" status="info" :percentage="quizScore" />
    </n-space>
  </div>
</template>
<script>
export default {
  name: "QuizCard",
  props: {
    quizName: String,
    quizScore: Number,
  },
};
</script>
<style lang=""></style>
