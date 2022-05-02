<template>
  <div class="wrapper">
    <HomePageHeader class="home_page_header" />
    <section id="homePage" class="home_page_contents">
      <br class="header_margin" />
      <div class="container">
        <div class="home_img">
          <img src="../assets/unc_school_of_nursing.jpg" id="unc_nursing" />
          <div class="img_contents">
            <h1 class="img_caption">
              Interactive quiz to help you prepare for the NCLEX exam.
            </h1>
            <!-- Get Started button routes to signup screen -->
            <n-button
              @click="signup()"
              type="primary"
              color="#0984e3"
              text-color="white"
              class="get_started_button"
              ><h3>Get Started</h3>
            </n-button>
          </div>
        </div>
      </div>
      <p class="copyright">© 2022 UNC School of Nursing</p>
    </section>
  </div>
</template>


<script>
import { NButton } from "naive-ui";
import HomePageHeader from "../components/HomePageHeader.vue";

export default {
  name: "HomePage",
  components: {
    HomePageHeader,
    NButton,
  },
  methods: {
    //after signup click navigate to signup screen
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
#unc_nursing {
  border-radius: 30px;
}

.wrapper {
  overflow: auto;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(36, 163, 255, 1) 15%,
    rgba(0, 56, 255, 1) 100%
  );
}

.header_margin {
  margin-bottom: 70px;
}

.home_img {
  margin-top: 20px;
}

.home_page_contents {
  text-align: center;
  color: white;
  width: 100%;
}

.container {
  position: relative;
  text-align: center;
  color: white;
}

.img_contents {
  position: relative;
  align-items: stretch;
}

.img_caption {
  position: absolute;
  bottom: 50px;
  left: 3%;
  font-size: 1.25rem;
  width: 600px;
  text-align: left;
  word-break: break-all;
}

.get_started_button {
  border-radius: 5px;
  position: absolute;
  bottom: 50px;
  right: 3%;
  padding: 30px;
  filter: drop-shadow(0px 0px 5px #2f3542);
}

.button_group {
  display: flex;
  justify-content: center;
}

.space {
  width: 4px;
  height: auto;
  display: inline-block;
}

.copyright {
  margin: 0%;
}
</style>
