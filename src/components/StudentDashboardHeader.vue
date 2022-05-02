<template>
  <section class="header_contents">
    <!-- logo works as a home button -->
    <div class="header_img">
      <img
        src="../assets/unc_logo.png"
        id="unc_logo"
        @click="loadStudentDashboard"
      />
    </div>
    <div class="header_space"></div>
    <div class="website_title">
      <h1>NCLEX Interactive Quiz</h1>
      <h3>UNC School of Nursing</h3>
    </div>
    <div class="space"></div>
    <div class="control_buttons">
      <b class="menu_options" @click="signout">Sign Out</b>
      <div class="space"></div>
      <n-avatar
        round
        :size="48"
        class="profile_img"
        :src="profile_img"
        @click="loadProfile"
      />
    </div>
  </section>
</template>

<script>
import { NAvatar } from "naive-ui";
import { supabase } from "../supabase/init";
export default {
  name: "StudentDashboardHeader",
  components: {
    NAvatar,
  },
  data() {
    return {
      profile_img: this.$store.state.user.profileImg,
    };
  },
  methods: {
    //navigate home
    loadStudentDashboard() {
      this.$router.push("/StudentDashboard");
    },
    loadProfile() {
      this.$router.push("/Profile");
    },
    async signout() {
      let { error } = await supabase.auth.signOut();
      if (error == null) {
        this.clearUser();
        this.signOut();
        this.$router.push("/");
      } else {
        console.log(error);
      }
    },
    clearUser() {
      this.$store.dispatch("clearUser");
    },
    signOut() {
      this.$store.dispatch("signOut");
    },
  },
};
</script>

<style scoped>
#unc_logo {
  height: 51px;
  width: 64px;
  float: left;
  cursor: pointer;
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
  background: linear-gradient(0.25turn, #ffffff, #f1f2f6);
  filter: drop-shadow(0px 5px 10px #2f3542);
  width: 100%;
  height: 70px;
}
.nav_bar {
  display: flex;
  align-items: center;
}
.menu_options {
  color: #2f3542;
  text-decoration: none;
  cursor: pointer;
}
.website_title {
  display: block;
  line-height: 0.5;
  float: right;
}
.control_buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  float: right;
  flex-grow: 1;
  margin-right: 2%;
}
.profile_img {
  cursor: pointer;
}
.header_space {
  width: 15px;
}
.space {
  width: 15px;
  height: auto;
  display: inline-block;
}
</style>