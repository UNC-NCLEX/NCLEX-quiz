<template>
    <StudentDashboard :scores=scores :past_quizzes=past_quizzes></StudentDashboard>
    <QuizzesContainer :quizzes=past_quizzes></QuizzesContainer>
</template>

<script>
import StudentDashboard from './components/StudentDashboard.vue'
import QuizzesContainer from './components/QuizzesContainer.vue'

export default {
  name: 'App',
  components: {
    StudentDashboard,
    QuizzesContainer
  },
  data () {
    return {
      scores: [
        {
          qid: 1,
          score: 100
        },
        {
          qid: 2,
          score: 70
        },
        {
          qid: 3,
          score: 90
        }
      ],
      past_quizzes: [
        {
          qid: 1,
          name: "Unit 1"
        },
        {
          qid: 2,
          name: "Unit 2"
        },
        {
          qid: 3,
          name: "Unit 3"
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-left:10%;
  padding-right:10%;
  color: #2c3e50;
  margin-top: 60px;
  background-color: linear-gradient(172.4deg, #24A3FF 5.89%, #24A3FF 5.9%, #0038FF 91.52%);
}

.container{
  background-color: linear-gradient(172.4deg, #24A3FF 5.89%, #24A3FF 5.9%, #0038FF 91.52%);
}
</style>
