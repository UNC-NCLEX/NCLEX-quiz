<template>
  <div class='main'>
    <h1>Pharmacology & Pathophysiology</h1>
    <div class="header">
    <h4 id="subtitle"> Instructor Dashboard </h4>
    <h4> <router-link :to="{}">Sign Out </router-link> </h4>
    </div>
    
    <div class="cont">
    <div class="quiz">
    <h2>
      Quiz Management
    </h2>
    <!--TODO add links to pages -->
    <h3><router-link :to="{}">View my quizzes</router-link></h3>
    <h3><router-link :to="{}">Add a quiz</router-link></h3>
    <h3><router-link :to="{}">Edit a quiz</router-link></h3>
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
          <!--TODO add links to pages -->
          <td><a href=""> *</a></td>
      </tr>
      <tr>
          <td>ex2</td>
          <!--TODO add links to pages -->
          <td><a href=""> *</a></td>
      </tr>
    </table>


    </div>
    </div>
    
    <!--TODO add links to pages -->
    <h2> <router-link :to="{}"> Manage Roster </router-link></h2>
    <!--TODO add other emails, maybe change to embedded form -->
    <p> <a href="mailto: aelisebe@live.unc.edu"> Report a problem</a></p>
  </div>
</template>

<script>
export default {
  name: 'InstructorDash',
  props: {
    msg: String
  },
    data() {
    return {
      fields: [
        {key: 'sid', sortable: true},
        {key: 'qid1', sortable:true},
        {key: 'qid2', sortable: true}
      ],
      scores: [
        {sid: 1, qid1: 90, qid2: 75},
        {sid: 2, qid1: 95, qid2: 90},
        {sid: 3, qid1: 75, qid2: 85}
      ]
    }
  }
}



</script>

<style scoped>
.main{
  font-family: 'Montserrat';
}
.cont{
    display: flex;
    padding: 10px;
    margin-bottom: 15px;
}
.quiz{
    text-align: center;
    padding:10px;
    margin-right:10%;
    width: 30%;
    background-color: rgba(170, 173, 173, 0.315);
    border-radius: 5%;
    box-shadow: 10px 10px 5px rgb(177, 168, 162);

}

.scores{
    text-align: center;
    padding: 10px;
    margin-left:15%;
    width:55%;
    background-color: rgba(170, 173, 173, 0.315); 
    border-radius: 5%;
    box-shadow: 10px 10px 5px rgb(177, 168, 162);
}
.header{
  text-align: right;
  margin-top: 3px;
}
#subtitle{
  background-color: #f1c40f;
  text-align: center;
  margin-left:85%;
  padding:5px;
}
h2{
    background-color: #fc5000;
    text-align: center;
    padding:10px;
    margin: 5px;
    margin-left: 10%;
    margin-right: 10%;
    
    
}
h3 {
  text-align: center;
}

table{
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  padding: 5px;
}
th, td{
  border: 1px solid black;
  width:20%;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
}

router-link, a {
  color: rgb(75, 85, 97);
  text-decoration: underline;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat)
</style>
