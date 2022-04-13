<template>
    <section class="header_contents">
        <div class="header_img">
            <img src="../assets/unc_logo.png" id="unc_logo" @click="loadStudentDashboard">
        </div>
        <div class="header_space"></div>
        <div class="website_title">
            <h1>NCLEX Interactive Quiz</h1>
            <h3>UNC School of Nursing</h3>
        </div>
        <div class="control_buttons">
            <n-button
                @click="logout"
                type="primary"
                color="#ff5c00"
                text-color="white"
                class="button"
                >Log Out</n-button
            >
            <div class="space"></div>
            <n-dropdown trigger="click" :options="options" @select="handleSelect">
                <n-avatar
                    round
                    :size="48"
                    class="profile_img"
                    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                    @click="loadProfile"
                />
            </n-dropdown>
        </div>
    </section>
</template>

<script>
import { NAvatar, NButton } from "naive-ui";

export default {
    name: "StudentDashboardHeader",
    components: {
        NAvatar,
        NButton
    },
    methods: {
        loadStudentDashboard() {
            this.$router.push("/StudentDashboard");
        },
        loadProfile() {
            this.$router.push("/profile");
        },
        logout() {
            // TODO: Implement logout function
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
    background: linear-gradient(.25turn, #ffffff, #f1f2f6);
    filter: drop-shadow(0px 5px 25px #2f3542);
    width: 100%;
    height: 70px;
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