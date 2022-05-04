<template>
    <div class="cont">
        <div class="quiz blue">
            <h1>Quiz Management</h1>
            <!--links to quizzes and question select pages-->
            <h2>
                <router-link :to="{ path: '/ViewAllQuizzes' }"
                    >View my quizzes</router-link
                >
            </h2>
            <h2>
                <router-link :to="{ name: 'Question Select' }"
                    >Add a quiz/question</router-link
                >
            </h2>
        </div>
        <div class="quiz orange">
            <h1>Student Management</h1>
            <!--links to quizzes and question select pages-->
            <h2>
                <router-link to="/Roster">Manage Roster</router-link>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "InstructorDash",
};
</script>

<style scoped>
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
    border-radius: 5%;
    box-shadow: 10px 10px 5px #cac9c9;
}

.orange {
   background: linear-gradient(
        172.4deg,
        #ff5c00 5.89%,
        #ff5c00 5.9%,
        #e8240e 91.52%
    );

}

.blue {
    background: linear-gradient(
        172.4deg,
        #24a3ff 5.89%,
        #24a3ff 5.9%,
        #0038ff 91.52%
    );
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
.quiz router-link,
a {
    color: white;
    text-decoration: underline;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat);
</style>
