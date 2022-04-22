<template>
    <div class="header" v-if="!isSigninSignupPage">
        <HomePageHeader v-if="isHomePage" />
        <StudentDashboardHeader v-if="!isHomePage" />
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

export default {
    name: "App",
    components: {
        HomePageHeader,
        StudentDashboardHeader,
        NMessageProvider
    },
    computed: {
        isHomePage() {
            return this.$route.name === "HomePage";
        },
        isSigninSignupPage() {
            return this.$route.name === "User Authentication";
        },
    },
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
