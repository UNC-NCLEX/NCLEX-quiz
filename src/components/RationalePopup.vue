<template>
  <div class="container">
    <div id="rationale">
      <div>
        <p>
          That's <b>{{ correct }}!</b>
        </p>
        <p><b>Rationale: </b> {{ rationale }}</p>
      </div>
      <!-- continue button to navigate to next question in quiz -->
      <div id="button">
        <n-button
          @click="handleContinue"
          size="large"
          type="primary"
          color="#fdcb6e"
          text-color="black"
          class="button"
          >Continue</n-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { NButton, useMessage } from "naive-ui";
import { supabase } from "../supabase/init";

// import { ref } from "vue";
export default {
  name: "RationalePopup",
  props: {
    correct: String,
    rationale: String,
  },
  components: {
    NButton,
  },
  setup() {
    const message = useMessage();
    return {
      createSuccessMessage(msg, time) {
        message.success(msg, { duration: time });
      },
    };
  },
  methods: {
    async updateScore() {
      //update store with score
      const { data, error } = await supabase.from("scores").insert([
        {
          user: this.$store.state.user.uid,
          quiz: this.$store.state.currentQid,
          email: this.$store.state.user.email,
          name: this.$store.state.user.name,
          score: this.$store.state.score,
          title: this.$store.state.currentQuizTitle,
        },
      ]);
      console.log(data, error);
    },
    // if another question in quiz, continue on; else, return to home and save score to database
    handleContinue() {
      this.$store.state.isSubmitted = false;
      if (this.$store.state.currentIndex < this.$store.state.quizLength - 1) {
        this.$store.commit("INC_QUESTION");
      } else {
        this.updateScore();
        this.createSuccessMessage(
          `Your score for ${this.$store.state.currentQuizTitle} is: ${this.$store.state.score}%. Please refresh to see your updated score.`,
          10000
        );
        this.$store.commit("RESET_QUIZ");
        this.$router.replace(`/StudentDashboard`);
        // update score for user in database
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*****CONTAINER*****/
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

/*****BODY*****/
#rationale {
  border: 1px #808080 solid;
  padding: 35px;
  margin: 35px 0;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #cac9c9;
  width: 50%;
}

/*****BUTTONS*****/
#button {
  text-align: center;
}

.n-button {
  background-color: #ffc633;
  box-shadow: 10px 10px 5px #cac9c9;
  margin: 25px 0 10px 0;
}
</style>
