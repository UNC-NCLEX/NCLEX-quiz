<template>
  <div class="student">
    <h1>{{ "Welcome <user>. Here is how you have done in your past quizzes:" }}</h1>
    <div v-for="(item, index) in scores" :key="item.qid">
        <li class=student__score__section>{{ past_quizzes[index].name}}: <span class=student__score>{{ item.score}}</span></li>     
    </div>
  </div>  
</template>

<script>
export default {
  name: 'StudentDashboard',
  props: {
    scores: Array,
    past_quizzes: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .student{
    color:black;
  }
  .student__score__section {
    font-size:1.5rem;
  }
  .student__score{
    font-weight: 700;
  }
  
</style>