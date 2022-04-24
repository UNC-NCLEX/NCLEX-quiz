<template>
    <div class="main">
        <div class="cont">
            <div class="quiz">
                <h2>Quiz Management</h2>
                <!--TODO: add links to pages -->
                <h3><router-link :to="{}">View my quizzes</router-link></h3>
                <h3><router-link :to="{}">Add a quiz/question</router-link></h3>
            </div>
            <div class="right">
                <h2 class="scores">Student Scores</h2>

                <h2 id="roster">
                    <router-link to="/Roster">Manage Roster</router-link>
                </h2>

                <h2 id="roster">Manage Roster</h2>
            </div>
        </div>
        <!--TODO: maybe change to embedded form -->
        <p><a href="mailto: unc-nclex-site@unc.edu"> Report a problem</a></p>
    </div>
</template>

<script>
export default {
    name: "InstructorDash",
    props: {
        msg: String,
    },
    data() {
        return {
            fields: [
                { key: "sid", sortable: true },
                { key: "qid1", sortable: true },
                { key: "qid2", sortable: true },
            ],
            scores: [
                { sid: 1, qid1: 90, qid2: 75 },
                { sid: 2, qid1: 95, qid2: 90 },
                { sid: 3, qid1: 75, qid2: 85 },
            ],
        };
    },
};
</script>

<style scoped>
.main {
    font-family: "Montserrat";
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
    background-color: #e0dbd9;
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
    color: #ff5c00;
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

router-link,
a {
    color: rgb(75, 85, 97);
    text-decoration: underline;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat);
</style>
