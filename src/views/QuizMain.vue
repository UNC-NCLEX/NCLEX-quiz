<template lang="">
    <div id="quiz" v-if="dataLoaded" @update="clicked">
        {{ this.$store.state.score }}
        {{ this.$store.state.correctAnswers }}
        <h1>Question {{ this.$store.state.currentIndex + 1 }}</h1>
        {{ this.$store.state.score }}
        {{ this.$store.state.correctAnswers }}
        <div id="question">
            <div
                v-if="
                    allQuestions[this.$store.state.currentIndex].type === 'mc'
                "
            >
                <MultipleChoice
                    :mc_question="allQuestions[this.$store.state.currentIndex]"
                >
                </MultipleChoice>
            </div>
            <div
                v-else-if="
                    allQuestions[this.$store.state.currentIndex].type ===
                    'select'
                "
            >
                <MultipleResponse
                    :mr_question="allQuestions[this.$store.state.currentIndex]"
                >
                </MultipleResponse>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";
import { useStore } from "vuex";
import { computed } from "vue";
import MultipleChoice from "../components/MultipleChoice.vue";
import MultipleResponse from "../components/MultipleResponse.vue";

export default {
    name: "QuizMain",
    methods: {
        clicked() {
            console.log("hey");
        },
    },
    components: {
        MultipleChoice,
        MultipleResponse,
    },
    setup() {
        const store = useStore();
        const allQuestions = ref([]); // where all the questions will be stored
        let currentQuestion = ref(null); // the currentQuestion that will be changed when you progress
        let dataLoaded = ref(false);
        let index = ref(0);
        const qid = computed(() => store.state.currentQid);
        const getAllQuestions = async () => {
            // get all Questions from a specific quiz that the user selected
            try {
                let { data: questions, error } = await supabase
                    .from("question")
                    .select("*")
                    .eq("quiz_id", qid.value)
                    .order("qid", { ascending: true });
                if (error) throw error;
                allQuestions.value = questions;
                currentQuestion.value = allQuestions.value[0];
                store.state.quizLength = allQuestions.value.length;
                dataLoaded.value = true;
            } catch (error) {
                console.warn(error.message);
            }
        };
        getAllQuestions();
        return { allQuestions, currentQuestion, index, dataLoaded };
    },
};
</script>
<style>
#quiz {
    text-align: center;
}
</style>
