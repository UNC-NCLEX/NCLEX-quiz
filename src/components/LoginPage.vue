<template>
    <div class="login-page">
        <h1>Pharmacology & Pathophysiology</h1>
        <h3>Interactive tool to help you learn</h3>
        <form class="login-form">
            <div class="form-group">
                <label for="email" class="login-label">Email</label>
                <input type="text" id="email" name="email" placeholder="Email Address"><br><br>
            </div>
            <div class="form-group">
                <label for="password" class="login-label">Password</label>
                <input type="text" id="password" name="password" placeholder="Password"><br><br>
            </div>
            <div class="form-group">
                <button id="submit">Log In</button>
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

</script>

<style scoped>
    input[type='text'] {
        display: inline-block;
        width: 30%;
    }

    .login-form {
        display: center;
    }

    .login-label {
        color: white;
        display: block;
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .login-page {
        color: white;
    }

    #forgot-password {
        color: #f1c40f;
    }

    #signup {
        color: #f1c40f;
    }

    #submit {
        background-color: #f1c40f;
        border: 2px solid #f1c40f;
        color: black;
        padding: 10px;
        text-align: center;
        width: 10%;
    }
</style>