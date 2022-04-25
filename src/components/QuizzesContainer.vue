<template>
    <div class="quizzes">
        <h1>Content</h1>
        <div v-for="item in quizzes" :key="'Quiz' + item.quiz_id">
            <button
                @click="navToQuiz"
                class="quizzes_card"
                :id="item.quiz_id"
                :data-id="item.title"
            >
                {{ item.title }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "QuizzesContainer",
    props: {
        quizzes: Array,
    },
    methods: {
        navToQuiz(e) {
            const selected_quiz_id = e.target.id;
            this.$store.state.currentQid = selected_quiz_id;
            this.$store.state.currentQuizTitle =
                e.target.getAttribute("data-id");
            console.log(e.target);
            this.$router.push(`/Quiz/${selected_quiz_id}`);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quizzes_card {
    width: 100%;
    min-height: 100px;
    margin-bottom: 20px;
    background: linear-gradient(180deg, #ff5c00 0%, #ff5c00 100%);
    box-shadow: -10px 10px 6px rgba(0, 0, 0, 0.7);
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 49px;
    cursor: pointer;
}
</style>
