<template>
  <h1>NCLEX Interactive Quiz</h1>
  <div class="form_group">
    <n-button @click="login()" type="primary" color="#ff5c00" text-color="white"
      >Login</n-button
    >
    <n-button
      @click="signup()"
      type="primary"
      color="#ff5c00"
      text-color="white"
      >Sign Up</n-button
    >
    <n-button
      @click="login_supabase()"
      type="primary"
      color="#ff5c00"
      text-color="white"
      >Test</n-button
    >
  </div>
</template>

<script>
import { NButton } from "naive-ui";
import { supabase } from "../supabase/init";

export default {
  name: "HomePage",
  components: {
    NButton,
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    signup() {
      this.$router.push("/signup");
    },
    async login_supabase() {
      const { user, session, error } = await supabase.auth.signIn({
        email: "fokneyokna@vusra.com",
        password: "password123",
      });
      this.$store.state.user = user;
      console.log(user, session, error);
      this.$router.push("/StudentDashboard");
    },
  },
};
</script>

<style scoped>
.form_group {
  align-items: center;
}

.form_group > button {
  display: block;
  margin: 5px;
}
</style>
