<template>
    <div class="signup-page">
        <h1>Pharmacology & Pathophysiology</h1>
        <h3>Interactive tool to help you learn</h3>
        <form class="signup-form">
            <div class="form-group">
                <label for="name" class="signup-label">Name</label>
                <input type="text" id="name" name="name" placeholder="Name"><br><br>
            </div>
            <div class="form-group">
                <label for="email" class="signup-label">Email</label>
                <input type="text" id="email" name="email" placeholder="Email"><br><br>
            </div>
            <div class="form-group">
                <label for="password" class="signup-label">Password</label>
                <input type="text" id="password" name="password" placeholder="Password"><br><br>
            </div>
            <div class="form-group">
                <button id="submit">Sign Up</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
    input[type='text'] {
        display: inline-block;
        width: 30%;
    }

    .signup-form {
        display: center;
    }

    .signup-label {
        color: white;
        display: block;
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .signup-page {
        color: white;
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
