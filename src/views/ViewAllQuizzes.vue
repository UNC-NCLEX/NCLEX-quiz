<!-- instructor page to view all current quizzes and questions -->
<template>
    <n-config-provider :theme-overrides="this.themeOverrides" class="wrapper">
        <div class="container">
            <h1 class="question__info">
                Please select a quiz from the dropdown list
            </h1>
            <!-- drop down to select quiz to display, saved into quizSelect variable -->
            <n-select
                v-model:value="quizSelect"
                placeholder="Please select a quiz to view:"
                :options="quizzes"
                name="select"
                class="question__select"
                @update:value="handleUpdateValue"
            >
            </n-select>
            <!-- display each question in selected quiz based on question type -->
            <div
                id="question"
                v-for="(item, index) in questions"
                :key="'QuizInstructor' + item.qid"
            >
                <h1 class="question__number">Question {{ index + 1 }}</h1>
                <div v-if="item.type === 'mc'">
                    <MultipleChoice :mc_question="item" :view_only="true"></MultipleChoice>
                </div>
                <div v-else-if="item.type === 'select'">
                    <MultipleResponse :mr_question="item" :view_only="true"></MultipleResponse>
                </div>
                <div v-else-if="item.type === 'dds'">
                    <DropDownSentence :dds_question="item" :view_only="true"></DropDownSentence>
                </div>
                <div v-else-if="item.type === 'ddt'">
                    <DropDown :ddt_question="item" :view_only="true"></DropDown>
                </div>
                <div v-if="item.type === 'ht'">
                    <HighlightTable :ht_question="item" :view_only="true"></HighlightTable>
                </div>
                <div v-if="item.type === 'mt'">
                    <MatrixTable :mt_question="item" :view_only="true"></MatrixTable>
                </div>
            </div>
        </div>
    </n-config-provider>
</template>
<script>
import { useMessage, NSelect, NConfigProvider } from "naive-ui";
import { ref } from "vue";
import { supabase } from "../supabase/init";
import MultipleChoice from "../components/MultipleChoice.vue";
import MultipleResponse from "../components/MultipleResponse.vue";
import DropDownSentence from "../components/DropDownSentence.vue";
import DropDown from "../components/DropDown.vue"
import HighlightTable from "../components/HighlightTable.vue"
import MatrixTable from "../components/MatrixTable.vue"

export default {
    name: "ViewAllQuizzes",
    components: {
        NSelect,
        MultipleChoice,
        MultipleResponse,
        DropDownSentence,
        DropDown,
        HighlightTable,
        MatrixTable,
        NConfigProvider
    },
    setup() {
        const message = useMessage();
        const quizSelectRef = ref(""); //selected quiz to display
        const quizzesRef = ref([]); //list of all quizzes
        const questionsRef = ref([]); //questions in selected quiz
        const getQuizzes = async () => {
            //get quizzes list from database
            try {
                let { data: quiz, error } = await supabase
                    .from("quiz")
                    .select("*");
                if (error) throw error;
                const quizzes = quiz.map((obj) => ({
                    label: obj.title,
                    value: obj.quiz_id,
                }));
                quizzesRef.value = quizzes;
            } catch (error) {
                message.error(error.message);
            }
        };
        //allows user to change which quiz to view from dropdown selection
        const handleUpdateValue = async () => {
            try {
                let { data: questions, error } = await supabase
                    .from("question")
                    .select("*")
                    .eq("quiz_id", quizSelectRef.value);
                if (error) throw error;
                questionsRef.value = questions;
            } catch (error) {
                message.error(error.message);
            }
        };
        getQuizzes();
        return {
            quizSelect: quizSelectRef,
            quizzes: quizzesRef,
            questions: questionsRef,
            handleUpdateValue,
        };
    },
    data() {
        return {
            themeOverrides: {
                common: {
                    primaryColor: "#FF8C00",
                },
            }
        }
    }
};
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    padding-bottom: 2%;
}

.question__number {
  text-align: center;
}

.question__select {
  width: 50%;
}

#question {
    margin-top: 20px;
}

#question:last-child {
    margin-bottom: 80px;
}
</style>
