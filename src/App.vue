<template>
  <router-view />
</template>

<script>
import { h, ref } from "vue";
import { supabase } from "./supabase/init";
import { NSelect } from "naive-ui";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "App",
  components: {},
  setup() {
    const store = useStore();
    const quizzes = ref([]);
    const scores = ref([]);
    const question = ref([]);
    const dataLoaded = ref(null);
    const count = computed(() => store.state.user);
    const getData = async () => {
      // TODO: get user's past quizzes in an array
      try {
        // TODO: SQL statement that selects all quizzes from DB and filters out the ones that are in the past quizzes array  .not('id','in',`(${arr})`)
        let { data: quiz, error } = await supabase.from("quiz").select("*");
        if (error) throw error;
        quizzes.value = quiz;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
      // get the user's scores
      try {
        let { data: score, error } = await supabase
          .from("scores")
          .select("*")
          .eq("user", count.value);
        if (error) throw error;
        scores.value = score;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
      try {
        let { data: question, error } = await supabase
          .from("question")
          .select("*");
        if (error) throw error;
        question.value = question;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
    };
    getData();
    return { count, quizzes, scores, dataLoaded, question };
  },
  data() {
    return {
      drugs: [
        {
          name: "Tylenol",
        },
        {
          name: "Advil",
        },
        {
          name: "Aceptaminophen",
        },
      ],
      options: [
        {
          label: "Marina Bay Sands",
          key: "marina bay sands",
          // disabled: true,
        },
        {
          label: "Brown's Hotel, London",
          key: "brown's hotel, london",
        },
        {
          label: "Atlantis Bahamas, Nassau",
          key: "atlantis nahamas, nassau",
        },
        {
          label: "The Beverly Hills Hotel, Los Angeles",
          key: "the beverly hills hotel, los angeles",
        },
      ],
      columns: [
        {
          key: "medication",
          title: "Medication",
        },
        {
          key: "DrugClassification",
          title: "Drug Classification",
          render() {
            return h(
              NSelect,
              {
                options: [
                  {
                    value: "option1",
                    label: "This is an example Medication",
                  },
                  {
                    value: "option2",
                    label: "This is an example Medicatioweqaen",
                  },
                  {
                    value: "option2",
                    label: "This is an example Medicatwearawrion",
                  },
                ],
              },
              {
                default: () => "her",
              }
            );
          },
        },
        {
          key: "ClientTeaching",
          title: "Client Teaching",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-left: 10%;
  padding-right: 10%;
  color: #2c3e50;

  margin-top: 60px;
  background-color: linear-gradient(
    172.4deg,
    #24a3ff 5.89%,
    #24a3ff 5.9%,
    #0038ff 91.52%
  );
}
.container {
  background-color: linear-gradient(
    172.4deg,
    #24a3ff 5.89%,
    #24a3ff 5.9%,
    #0038ff 91.52%
  );
}
</style>
