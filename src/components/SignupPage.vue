<template>
    <div class="signup-page">
        <h1 id="header">Pharmacology & Pathophysiology</h1>
        <h3>Interactive tool to help you learn</h3>
        <form class="signup-form">
            <div class="form-group">
                <label for="name" class="signup-label">Name</label>
                <n-input v-model:value="value" type="text" class="form-field" id="name" name="name" placeholder="Name" /><br><br>
            </div>
            <div class="form-group">
                <label for="email" class="signup-label">Email</label>
                <n-input v-model:value="value" type="text" class="form-field" id="email" name="email" placeholder="Email Address" /><br><br>
            </div>
            <div class="form-group">
                <label for="password" class="signup-label">Password</label>
              <n-input type="password" show-password-on="mousedown" class="form-field" id="password" name="password" placeholder="Password" :maxlength="64"/><br><br>
            </div>
            <div class="form-group">
                <n-button type="primary" id="submit" color="#ffc634" text-color="black">Sign Up</n-button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { NButton, NInput } from 'naive-ui'
export default {
  name: 'SignupPage',
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

    .signup-form {
        display: center;
    }

    .signup-label {
        color: white;
        display: block;
        margin-bottom: 0.5rem;
        text-align: left;
    }

    .signup-page {
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
