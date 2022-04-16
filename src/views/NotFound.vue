<template>
    <n-empty class="not_found" size="huge" description="It looks like you typed in the wrong URL in the address bar. This page does not exist." @click="loadHome">
        <template #extra>
            <n-button size="large">
                Return Home
            </n-button>
        </template>
    </n-empty>
</template>

<script>
import { NButton, NEmpty } from "naive-ui";

export default {
    name: "NotFound",
    components: {
        NButton,
        NEmpty
    },
    methods: {
        loadHome() {
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.not_found {
    position: relative;
    margin: auto;
    margin-top: 10%;
}
</style>