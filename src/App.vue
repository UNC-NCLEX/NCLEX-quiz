<template>
  <multiple-choice />
  <DropDown :drugs="drugs" :options="options"></DropDown>
  <drop-down-sentence />
</template>

<script>
import MultipleChoice from "./components/MultipleChoice.vue";
import DropDown from "./components/DropDown.vue";
import DropDownSentence from "./components/DropDownSentence.vue";

export default {
  name: "App",
  components: {
    MultipleChoice,
    DropDown,
    DropDownSentence,
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
          key: "marina bay sands"
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
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
