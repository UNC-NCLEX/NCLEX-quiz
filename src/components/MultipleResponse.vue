<template>
    <div class="container">
        <div class="question">
            <div class="information">
                <n-tabs type="line">
                    <n-tab-pane
                        name="History and Physical"
                        tab="History and Physical"
                    >
                        {{ mr_question.hist_and_phys }}
                    </n-tab-pane>
                    <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
                        {{ mr_question.nurse_notes }}
                    </n-tab-pane>
                    <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
                        {{ mr_question.flow_sheet }}</n-tab-pane
                    >
                    <n-tab-pane
                        name="Laboratory Results"
                        tab="Laboratory Results"
                    >
                        {{ mr_question.lab_results }}
                    </n-tab-pane>
                    <n-tab-pane name="Orders" tab="Orders">
                        {{ mr_question.orders }}
                    </n-tab-pane>
                </n-tabs>
            </div>
            <h3>
                {{ mr_question.text }}
            </h3>
            <n-checkbox-group v-model:value="choiceSel" name="radiogroup">
                <n-checkbox
                    v-for="(item, index) in mr_question.answer_choice"
                    :key="item + index"
                    :value="item"
                    :label="item"
                >
                </n-checkbox>
            </n-checkbox-group>
        </div>
        <n-button size="large" @click="checkAnswer">Submit</n-button>
    </div>
</template>

<script>
import { NButton, NCheckbox, NCheckboxGroup, NTabPane, NTabs } from "naive-ui";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    name: "MultipleResponse",
    props: {
        mr_question: Object,
    },
    components: {
        NButton,
        NCheckbox,
        NCheckboxGroup,
        NTabPane,
        NTabs,
    },
    computed: {
        question() {
            return this.$store.getters.questionNext;
        },
    },
    setup(props) {
        const choiceSelRef = ref([]);
        const store = useStore();
        function ifSameArray(arr1, arr2) {
            console.log(arr1);
            console.log(arr2);
            if (arr1.length !== arr2.length) return false;
            const arr1_sorted = arr1.sort();
            const arr2_sorted = arr2.sort();
            for (let i = 0; i < arr1.length; i++) {
                if (arr1_sorted[i] !== arr2_sorted[i]) return false;
            }
            return true;
        }
        return {
            choiceSel: choiceSelRef,
            checkAnswer() {
                // TODO:
                // check answer,
                // show rational,
                // and then update scores
                console.log(choiceSelRef.value);
                console.log(props.mr_question);
                if (
                    ifSameArray(
                        props.mr_question.correct_answers,
                        choiceSelRef.value
                    )
                ) {
                    console.log("correct");
                    store.state.correctAnswers = store.state.correctAnswers + 1;
                    store.commit("UPDATE_SCORE");
                }
                store.commit("INC_QUESTION"); // iterate state to show next question
            },
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*****CONTAINER*****/
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}

/*****TITLE*****/
h2 {
    color: #fe4400;
}

/*****TABS*****/
.information {
    border: 1px #808080 solid;
    padding: 35px;
    margin: 35px 0;
    border-radius: 10px;
    box-shadow: 10px 10px 5px #cac9c9;
}

/*****QUESTION*****/
.question {
    width: 75vw;
    text-align: left;
}

/*****ANSWERS*****/
.n-checkbox {
    border: 1px #808080 solid;
    box-shadow: 10px 10px 5px #cac9c9;
    border-radius: 10px;
    width: 72vw;
    padding: 20px 1.5vw;
    margin-top: 10px;
}

.choice-text {
    padding: 0 10px;
}

/*****BUTTON*****/
.n-button {
    background-color: #ffc633;
    box-shadow: 10px 10px 5px #cac9c9;
    margin: 25px 0;
}

a {
    text-decoration: none;
}
</style>
