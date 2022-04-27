<template>
    <div class="wrapper">
        <div class="cont">
            <div class="quiz">
                <h2>Quiz Management</h2>
                <!--TODO: add links to pages -->
                <h3><router-link :to="{path: '/ViewAllQuizzes'}">View my quizzes</router-link></h3>
                <h3><router-link :to="{ name: 'Question Select' }">Add a quiz/question</router-link></h3>
            </div>
            <div class="right">
                <h2 class="scores">Student Scores</h2>

                <h2 id="roster">
                    <router-link to="/Roster">Manage Roster</router-link>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InstructorDash",
};
</script>

<style scoped>
.wrapper {
    font-family: "Montserrat";
    overflow: auto;
    position: absolute;
    height: 100%;
    width: 100%;
}
.cont {
    display: flex;
    justify-content: center;
    padding: 10px;
    padding-top: 3%;
    width: auto;
    margin: auto;
    margin-bottom: 15px;
    align-content: center;
}
.quiz {
    text-align: center;
    padding: 10px;
    margin-right: 3%;
    width: 25%;
    background: linear-gradient(172.4deg, #24A3FF 5.89%, #24A3FF 5.9%, #0038FF 91.52%);
    border-radius: 5%;
    box-shadow: 10px 10px 5px #cac9c9;
}

.right {
    text-align: center;
    padding: 10px;
    margin-left: 3%;
    width: 25%;
}
.scores {
    background-color: #ff5c00;
    color: white;
    border-radius: 5%;
    margin-top: 5%;
    box-shadow: 10px 10px 5px #cac9c9;
}

#roster {
    background-color: #ff5c00;
    color: white;
    border-radius: 5%;
    margin-top: 15%;
    box-shadow: 10px 10px 5px #cac9c9;
}

#subtitle {
    color: white;
}
h2 {
    color: white;
    font-weight: 900;
    text-align: center;
    padding: 10px;
    margin: 5px;
    margin-left: 10%;
    margin-right: 10%;
}
h3 {
    text-align: center;
}
h1 {
    color: white;
}
table {
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    padding: 5px;
}
th,
td {
    border: 1px solid black;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
}
.quiz 
router-link,
a {
    color: white;
    text-decoration: underline;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat);
</style>
