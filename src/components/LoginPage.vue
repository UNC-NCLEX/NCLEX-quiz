<template>
    <div class="login-page">
        <h1 id="header">Pharmacology & Pathophysiology</h1>
        <h3>Interactive tool to help you learn</h3>
        <form class="login-form">
            <div class="form-group">
                <label for="email" class="login-label">Email</label>
                <n-input v-model:value="value" type="text" class="form-field" id="email" name="email" placeholder="Email Address" /><br><br>
            </div>
            <div class="form-group">
                <label for="password" class="login-label">Password</label>
                <n-input type="password" show-password-on="mousedown" class="form-field" id="password" name="password" placeholder="Password" :maxlength="64"/><br><br>
            </div>
            <div class="form-group">
                <n-button type="primary" id="submit" color="#ffc634" text-color="black">Log In</n-button>
            </div>
        </form>
        <br>
        <div class="login-help">
            <!-- TODO: Fix href links for the sign up and forgot password links -->
            <p>Don't have an account? <a id="signup" href="test">Sign up here</a></p>
            <p>Forgot your password? <a id="forgot-password" href="test">Click here</a></p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { NButton, NInput } from 'naive-ui'

export default {
  name: 'LoginPage',
  components: {
    NButton,
    NInput
  },
  setup() {
    return {
      value: ref(null)
    };
  }
}
</script>

<style scoped>
    .form-field {
        color: black;
        text-align: left;
    }

    .form-group {
        width: 350px;
    }

    .login-form {
        display: center;
    }

    .login-label {
        color: white;
        display: block;
        margin-bottom: 0.5rem;
        text-align: left;
    }

    .login-page {
        align-items: center;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #forgot-password {
        color: #ffc634;
    }

    #header {
        height: 25px;
    }

    #signup {
        color: #ffc634;
    }
</style>
