<template>
    <div class="container">
        <div class="question">
            <div class="information">
                <n-tabs type="line">
                    <n-tab-pane
                        name="History and Physical"
                        tab="History and Physical"
                    >
                        {{ mc_question.hist_and_phys }}
                    </n-tab-pane>
                    <n-tab-pane name="Nurse's Notes" tab="Nurse's Notes">
                        {{ mc_question.nurse_notes }}
                    </n-tab-pane>
                    <n-tab-pane name="Flow Sheet" tab="Flow Sheet">
                        {{ mc_question.flow_sheet }}</n-tab-pane
                    >
                    <n-tab-pane
                        name="Laboratory Results"
                        tab="Laboratory Results"
                    >
                        {{ mc_question.lab_results }}
                    </n-tab-pane>
                    <n-tab-pane name="Orders" tab="Orders">
                        {{ mc_question.orders }}
                    </n-tab-pane>
                </n-tabs>
            </div>
            <h3>
                {{ mc_question.text }}
            </h3>
            <n-radio-group v-model:value="checkedValue" name="radiogroup">
                <n-radio
                    v-for="item in mc_question.answer_choice"
                    :key="item + this.$store.state.currentIndex"
                    :value="item"
                    class="choice-text"
                    :checked="checkedValue === item"
                    @change="handleChange"
                    size="large"
                    >{{ item }}</n-radio
                >
            </n-radio-group>
        </div>
        <!--rational popup only displays after question is submitted (if isSubmitted). if not submitted then submit button display-->
        <div v-if="!this.$store.state.isSubmitted && !view_only">
            <n-button size="large" @click="checkAnswer">Submit</n-button>
        </div>
        <div v-else-if="this.$store.state.isSubmitted && !view_only">
            <RationalePopup
                :correct="this.$store.state.correct"
                :rationale="mc_question.rationale"
            />
        </div>
    </div>
</template>

<script>
import { NButton, NTabPane, NTabs, NRadio, NRadioGroup } from "naive-ui";
import { ref } from "vue";
import { useStore } from "vuex";
import RationalePopup from "../components/RationalePopup.vue";

export default {
    name: "MultipleChoice",
    props: {
        //currect question data passed in as a prop -> immutable
        mc_question: Object,
        view_only: {
            default: false,
            type: Boolean,
        },
    },
    components: {
        NButton,
        NTabPane,
        NTabs,
        NRadio,
        NRadioGroup,
        RationalePopup,
    },
    setup(props) {
        const checkedValue = ref("");
        const store = useStore();
        return {
            checkedValue: ref(null),
            handleChange(e) {
                checkedValue.value = e.target.value;
            },
            checkAnswer() {
                //set as true so rationale popup displays for question
                store.state.isSubmitted = true;
                //compare submitted answer to correct answer array
                if (
                    props.mc_question.correct_answers.includes(
                        checkedValue.value
                    )
                ) {
                    console.log("correct");
                    store.state.correct = "correct";
                    store.state.numOfCorrectAnswers =
                        store.state.numOfCorrectAnswers + 1;
                    store.commit("UPDATE_SCORE");
                } else {
                    store.state.correct = "incorrect";
                }
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
.n-radio {
    border: 1px #808080 solid;
    box-shadow: 10px 10px 5px #cac9c9;
    border-radius: 10px;
    width: 72vw;
    padding: 20px 1.5vw;
    margin-top: 10px;
}

.choice-text {
    padding: 10px 10px;
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
