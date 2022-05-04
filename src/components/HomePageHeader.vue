<template>
  <section class="header_contents">
    <div class="header_img">
      <img src="../assets/unc_logo.png" id="unc_logo" />
    </div>
    <div class="header_space"></div>
    <div class="website_title">
      <h1>NCLEX Interactive Quiz</h1>
      <h3>UNC School of Nursing</h3>
    </div>
    <!-- Sign In and Sign Up buttons -->
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
    </div>
  </section>
</template>

<script>
import { NButton } from "naive-ui";

export default {
  name: "HomePageHeader",
  components: {
    NButton,
  },
  methods: {
    //authenticate user for both signup an signin
    signin() {
      this.$router.push({
        name: "User Authentication",
        params: { id: "signin" },
      });
    },
    signup() {
      this.$router.push({
        name: "User Authentication",
        params: { id: "signup" },
      });
    },
  },
};
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
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  background: linear-gradient(0.25turn, #ffffff, #f1f2f6);
  filter: drop-shadow(0px 5px 10px #2f3542);
  width: 100%;
  height: 70px;
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
         -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
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
