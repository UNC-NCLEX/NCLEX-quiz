<template>
  <div class="roster">
    <h2>Class Roster</h2>
    <div class="subhead">
    <div class="enroll">
        <h3> Add New Student </h3>
    <div class="form-group">
        <label for="pid" class="pid-label">Pid</label>
        <n-input v-model:value="newPid" type="text" class="form-field" id="pid" name="pidInput" placeholder="Student Pid" />
    </div>
    <div class="form-group">
        <label for="onyen" class="onyen-label">Onyen</label>
        <n-input v-model:value="newOnyen" type="text" class="form-field" id="onyen" name="onyenInput" placeholder="Student Onyen" />
    </div>
    <div class="form-group">
        <n-button @click="enrollButton()" type="primary" id="add" color="#ff853e" text-color="black">Enroll Student</n-button>
    </div>
    </div>
    </div>
    <table id="rosterTable">
      <thead>
        <th>Onyen</th>
        <th>PID</th>
        <th id="nocolor"> </th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in students" :key="index">
          <td>{{students[index].onyen}}</td>
          <td>{{students[index].pid}}</td>
          <td><button @click="deleteStudent(index)">Remove</button></td>
        </tr>
      </tbody>
    
    </table>
  </div>  
</template>

<script>
import {NButton, NInput} from 'naive-ui'

export default {
  name: 'StudentRoster',
  components: {
      NButton,
      NInput
  },
  props: {
    students: Array
  },
  methods: {
      deleteStudent(index) {
          this.$store.dispatch('deleteStudent', index);
      },
      enrollButton(){
          var temp = {"onyen": this.newOnyen, "pid": this.newPid};
          this.$store.dispatch('enrollStudent', temp);
          this.newOnyen="";
          this.newPid="";
      }
  }
}
</script>

<style scoped>
.subhead{
    background:#ffc634;
    padding-bottom: 2%;
    padding-top: .2%;
}
.enroll{
    width: 30%;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
}
.roster{
  font-family: 'Montserrat';
}
table {
    min-height: 100px;
    margin-top: 3%;
    margin-left: auto;
    margin-right: auto;
    width:60%;
}
h2{
  color: #ff5c00;
  font-weight: 900;
  font-size: 20pt;
  text-align: center;
}
thead{
  background-color: #0094FF;
}
th{
    color:white
}

table tr:nth-child(odd) td{
    background-color: rgb(223, 219, 219);
}
#nocolor{
  background-color: white;
}

@import url(https://fonts.googleapis.com/css?family=Montserrat)
</style>