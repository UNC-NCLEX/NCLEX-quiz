<template>
    <h1>NCLEX Interactive Quiz</h1>
    <div class="form_group">
        <n-button @click="login()" type="primary" color="#ff5c00" text-color="white">Login</n-button>
        <n-button @click="signup()" type="primary" color="#ff5c00" text-color="white">Sign Up</n-button>
    </div>
</template>

<script>
import { NButton } from 'naive-ui'

export default {
    name: 'HomePage',
    components: {
        NButton
    },
    methods: {
        login() {
            this.$router.push('/login');
        },
        signup() {
            this.$router.push('/signup');
        }
    }
}
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