<template>
  <TopHeader v-if="isNotHomePage" />
  <router-view />
</template>

<script>
import { h, ref } from "vue";
import { supabase } from "./supabase/init";
import { NSelect } from "naive-ui";
import { useStore } from "vuex";
import { computed } from "vue";
import TopHeader from "./components/Header.vue"

export default {
  name: "App",
  components: {
    TopHeader
  },
  setup() {
    const store = useStore();
    const quizzes = ref([]);
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
    return { count, quizzes, dataLoaded, question };
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
  computed: {
    isNotHomePage() {
      return this.$route.name !== 'HomePage'
    }
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: linear-gradient(
    172.4deg,
    #24a3ff 5.89%,
    #24a3ff 5.9%,
    #0038ff 91.52%
  );
}
.header {
  text-align: center;
  padding-top: 5%;
  padding-bottom: 5%;
  background: rgb(36,163,255);
  background: linear-gradient(0deg, rgba(36,163,255,1) 15%, rgba(0,56,255,1) 100%);
  color: white;
  width: 100%;
}
</style>
