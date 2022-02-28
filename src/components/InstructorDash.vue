<template>
  <div class="main">
    <h4> Instructor Dashboard </h4>
    <h4> <a href="">Sign Out </a> </h4>
    <div class="cont">
    <div class="quiz">
    <h2>
      Quiz Management
    </h2>
    <h3><a href="" target="_blank" rel="noopener">View my quizzes</a></h3>
    <h3><a href="" target="_blank" rel="noopener">Add a quiz</a></h3>
    <h3><a href="" target="_blank" rel="noopener">Edit a quiz</a></h3>
    </div>
    <div class="scores">
    <h2>Student Scores</h2>
    <table>
      <tr>
          <th>Onyen</th>
          <th>Scores</th>
      </tr>
      <tr>
          <td>ex1</td>
          <td><a href=""> *</a></td>
      </tr>
      <tr>
          <td>ex2</td>
          <td><a href=""> *</a></td>
      </tr>
    </table>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructorDash',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.cont{
    display: flex;
}
.quiz{
    text-align: center;
    margin-right:25%;
    background-color: rgba(100, 103, 104, 0.315);

}
.scores{
    text-align: center;
    margin-left:25%;
    background-color: rgba(100, 103, 104, 0.315); 
}
h4{
    text-align: right;
    margin-top: 3px;
    
}
h2{
    background-color: rgb(168, 195, 212);
    text-align: center;
    padding:10px;
}
h3 {
  text-align: left;
}

table, th, td{
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
}

a {
  color: rgb(86, 115, 148);
}
</style>
