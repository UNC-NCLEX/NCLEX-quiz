<template>
    <section class="header_contents">
        <div class="header_img">
            <img src="../assets/unc_logo.png" id="unc_logo">
        </div>
        <div class="header_space"></div>
        <div class="website_title">
            <h1>NCLEX Interactive Quiz</h1>
            <h3>UNC School of Nursing</h3>
        </div>
        <div class="button_group">
            <n-button
                @click="signin()"
                type="primary"
                color="#ff5c00"
                text-color="white"
                class="button"
                >Sign In</n-button
            >
            <div class="space"></div>
            <n-button
                @click="signup()"
                type="primary"
                color="#ff5c00"
                text-color="white"
                class="button"
                >Sign Up</n-button
            >
            <div class="space"></div>
            <n-button
                @click="signin_supabase()"
                type="primary"
                color="#ff5c00"
                text-color="white"
                class="button"
                >Test</n-button
            >
        </div>
    </section>
</template>

<script>
import { NButton } from "naive-ui";
import { supabase } from "../supabase/init";

export default {
    name: "HomePageHeader",
    components: {
        NButton
    },
    methods: {
        signin() {
            this.$router.push({name: "User Authentication", params: {id: "signin"}});
        },
        signup() {
            this.$router.push({name: "User Authentication", params: {id: "signup"}});
        },
        async signin_supabase() {
            const { user, session, error } = await supabase.auth.signIn({
                email: "fokneyokna@vusra.com",
                password: "password123",
        });
        this.$store.state.user = user;
        console.log(user, session, error);
        this.$router.push("/StudentDashboard");
        }
    }
}
</script>

<style scoped>
#unc_logo {
    height: 51px;
    width: 64px;
    margin-top: 1%;
    float: left;
}

.header_img {
    display: flex;
    align-items: center;
    margin-left: 2%;
}

.header_contents {
    position: fixed;
    z-index: 1;
    display: flex;
    background: linear-gradient(.25turn, #ffffff, #f1f2f6);
    filter: drop-shadow(0px 5px 10px #2f3542);
    width: 100%;
    height: 70px;
}

.website_title {
    display: block;
    line-height: 0.5;
    float: right;
}

.button_group {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  float: right;
  flex-grow: 1;
  margin-right: 2%;
}

.header_space {
    width: 15px;
}

.space {
  width: 5px;
  height: auto;
  display: inline-block;
}
</style>