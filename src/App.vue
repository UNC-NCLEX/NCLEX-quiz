<template>
  <div class="header" v-if="!isAuthOr404Page">
    <HomePageHeader v-if="isHomePage" />
    <StudentDashboardHeader v-if="isStudent" />
    <InstructorDashboardHeader v-if="isInstructor" />
    <br class="header_margin" v-if="!isHomePage" />
  </div>
  <n-message-provider>
    <router-view />
  </n-message-provider>
</template>

<script>
import { NMessageProvider } from "naive-ui";
import HomePageHeader from "./components/HomePageHeader.vue";
import StudentDashboardHeader from "./components/StudentDashboardHeader.vue";
import InstructorDashboardHeader from "./components/InstructorDashboardHeader.vue";

export default {
  name: "App",
  components: {
      HomePageHeader,
      StudentDashboardHeader,
      InstructorDashboardHeader,
      NMessageProvider,
  },
  computed: {
    isHomePage() {
      return this.$route.name === 'HomePage';
    },
    isStudent() {
      return this.$store.state.user.userType === "student";
    },
    isInstructor() {
      return this.$store.state.user.userType === "instructor";
    },
    isAuthOr404Page() {
      return this.$route.name === 'User Authentication' ||
        this.$route.name === "Password Recovery" ||
        this.$route.name === "NotFound";
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
}

.header_margin {
    margin-bottom: 70px;
}
</style>
