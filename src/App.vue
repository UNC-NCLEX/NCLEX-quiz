<template>
  
  <StudentRoster :students="this.$store.state.students"/>
</template>

<script>
import StudentRoster from './components/Roster.vue';
//import studentData from './components/studentData.js'
export default {
  name: 'App',
  components: {
    StudentRoster,
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
