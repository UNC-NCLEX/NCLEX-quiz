<template>
    <section id="homePage" class="home_page_contents">
        <div class="content">
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
        <p class="copyright">© 2022 UNC School of Nursing</p>
    </section>
</template>

<script>
import { NButton } from "naive-ui";

export default {
    name: "HomePage",
    components: {
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

#homePage {
    height: calc(100vh - 70px);
    width: 100%;
    background: linear-gradient(
        0deg,
        rgba(36, 163, 255, 1) 15%,
        rgba(0, 56, 255, 1) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.content {
    text-align: center;
    width: 70%;
    color: white;
    padding-top:4%;
    padding-bottom:4%;
    background-image: url(../assets/unc_school_of_nursing.jpg);
    background-size: cover;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
}

.home_page_contents {
    text-align: center;
    color: white;
    width: 100%;
}
.img_caption {
    font-size: 3rem;
    padding:2%;
    background-color:#00000091;
    text-align: left;
    word-break: break;
}

.get_started_button {
    border-radius: 5px;
    padding: 30px;
    filter: drop-shadow(0px 0px 5px #2f3542);
}

.button_group {
    display: flex;
    justify-content: center;
}

.copyright {
    margin: 0%;
    font-size: 0.8rem;
}
</style>
