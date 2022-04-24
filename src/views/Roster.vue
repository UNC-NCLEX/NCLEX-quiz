<template>
  <div class="roster">
    <h2>Class Roster</h2>
    <div class="subhead">
    <div class="enroll">
        <h3> Add New Student </h3>
    <div class="form-group">
        <label for="onyen" class="onyen-label">Onyen</label>
        <n-input v-model:value="newOnyen" type="text" class="form-field" id="onyen" name="onyenInput" :input-props="{ type: 'clearable' }" placeholder="Student Onyen" />
    </div>
    <div class="form-group">
        <n-button @click="enrollButton()" type="primary" id="add" color="#ff853e" text-color="black">Enroll Student</n-button>
    </div>
    </div>
    </div>
    <table id="rosterTable">
      <thead>
        <th>Onyen</th>
        <th id="nocolor"> Remove</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in rosterRef" :key="item + index">
          <td>{{item}}</td>
          <td><button @click="deleteStudent(item)">Remove</button></td>
        </tr>
      </tbody>
    
    </table>
  </div>  
</template>

<script>
import {NButton, NInput, useMessage} from 'naive-ui';
import {ref} from 'vue';
import { supabase } from "../supabase/init";

export default {
  name: 'StudentRoster',
  components: {
      NButton,
      NInput
  },
  setup(){
    const message = useMessage();
    const rosterRef = ref([]);
    const newOnyen = ref(null);

    const getRoster = async () => {
        // TODO: get user's past quizzes in an array
        // get the user's scores
        try {
            let { data: onyen, error } = await supabase
                .from("roster")
                .select("onyen")
            if (error) throw error;
            const onyens = onyen.map((x) => x.onyen);
            rosterRef.value = onyens;
        } catch (error) {
            message.error(error.message);
        }
    };

    const deleteStudent = async (onyen) => {
      const { error } = await supabase
            .from('roster')
            .delete()
            .eq('onyen', onyen)
          if (error) message.error(error.message)
          else {rosterRef.value.pop(newOnyen.value)}
    };

    const enrollButton = async () => {

      const { error } = await supabase.from("roster").insert([
          {
            onyen: newOnyen.value
          },
        ]);
        if (error) message.error(error.message)
        else {rosterRef.value.push(newOnyen.value)}
    }

    getRoster();
    return { rosterRef, newOnyen, enrollButton, deleteStudent };
    
  },

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