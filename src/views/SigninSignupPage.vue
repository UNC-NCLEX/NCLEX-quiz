<template>
<n-config-provider :theme-overrides="this.themeOverrides">
    <div class="img_section"></div>
    <div class="signin_signup_section">
        <div class="nclex_title">
            <div class="header_img">
                <img src="../assets/unc_logo.png" id="unc_logo" @click="loadStudentDashboard">
            </div>
            <div class="header_space"></div>
            <div class="website_title">
                <h1>NCLEX Interactive Quiz</h1>
                <h3>UNC School of Nursing</h3>
            </div>
        </div>
        <n-card class="signin_signup_card">
        <n-tabs default-value="signin" size="large" justify-content="space-evenly" class="signin_signup_tabs">
            <n-tab-pane name="signin" tab="Sign In">
                <n-form>
                    <n-form-item-row label="Email Address">
                        <n-input v-model:value="email" type="text" class="form_field" id="email" name="email" placeholder="Email Address" backrground-color="#33FF90" color="#33FF90" />
                    </n-form-item-row>
                    <n-form-item-row label="Password">
                        <n-input v-model:value="password" type="password" show-password-on="mousedown" class="form_field" id="password" name="password" placeholder="Password" :maxlength="64"/>
                    </n-form-item-row>
                </n-form>
                <div class="form_button">
                    <n-button type="primary" color="#ff5c00" text-color="white" @click="handleSignin">Sign In</n-button>
                </div>
            </n-tab-pane>
            <n-tab-pane name="signup" tab="Sign Up">
                <n-form>
                    <n-form-item-row label="Name">
                        <n-input v-model:value="name" type="name" class="form_field" id="name" name="name" placeholder="Name"/>
                    </n-form-item-row>
                    <n-form-item-row label="Email Address">
                        <n-input v-model:value="email" type="text" class="form_field" id="email" name="email" placeholder="Email Address" />
                    </n-form-item-row>
                    <n-form-item-row label="Password">
                        <n-input v-model:value="password" type="password" show-password-on="mousedown" class="form_field" id="password" name="password" placeholder="Password" :maxlength="64"/>
                    </n-form-item-row>
                    <n-form-item-row label="Confirm Password">
                        <n-input v-model:value="confirmPassword" type="password" show-password-on="mousedown" class="form_field" id="password" name="password" placeholder="Password" :maxlength="64"/>
                    </n-form-item-row>
                    <div class="form_button">
                        <n-button type="primary" color="#ff5c00" text-color="white" class="form_button" @click="handleSignup">Sign Up</n-button>
                    </div>
                </n-form>
            </n-tab-pane>
            <n-tab-pane name="forgot_password" tab="Forgot Password?">
                <n-form>
                    <n-form-item-row label="Email Address">
                        <n-input v-model:value="value" type="text" class="form_field" id="email" name="email" placeholder="Email Address" backrground-color="#33FF90" color="#33FF90" />
                    </n-form-item-row>
                    <div class="form_button">
                        <n-button type="primary" color="#ff5c00" text-color="white" class="form_button" @click="resetPassword">Send Recovery Email</n-button>
                    </div>
                </n-form>
            </n-tab-pane>
        </n-tabs>
        </n-card>
    </div>
</n-config-provider>
</template>

<script>
import { NCard, NTabs, NTabPane, NForm, NFormItemRow, NInput, NButton, NConfigProvider } from "naive-ui";
import VueJwtDecode from 'vue-jwt-decode'
import { supabase } from "../supabase/init";

export default {
    name: "SigninSignupPage",
    components: {
        NCard,
        NTabs,
        NTabPane,
        NForm,
        NFormItemRow,
        NInput,
        NButton,
        NConfigProvider
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            themeOverrides: {
                common: {
                    primaryColor: "#FF8C00"
                }
            }
        }
    },
    methods: {
        async handleSignin() {
            const resp = await supabase.auth.signIn({
                email: this.email,
                password: this.password
            })

            if (resp.error == null) {
                let jwt = resp.data.access_token;
                this.setJWT(jwt);
                
                try {
                    let decoded = VueJwtDecode.decode(jwt);
                    this.setUID(decoded.sub);
                    this.setName(decoded.user_metadata.name);
                    this.setEmail(decoded.email);
                    this.$router.push("/StudentDashboard");
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log(resp.error);
            }
        },
        async handleSignup() {
            const resp = await supabase.auth.signUp({
                email: this.email,
                password: this.password,
            },
            {
                data: {
                    name: this.name
                }
            })

            if (resp.error != null) {
                console.log(resp.error);
            } 
        },
        async handlePasswordReset() {
            // let { data, error } = await supabase.auth.api.resetPasswordForEmail(this.email);
        },
        setUID(uid) {
            this.$store.dispatch('setUID', uid);
        },
        setJWT(jwt) {
            this.$store.dispatch('setJWT', jwt);
        },
        setName(name) {
            this.$store.dispatch('setName', name);
        },
        setEmail(email) {
            this.$store.dispatch('setEmail', email);
        }
    }
}
</script>

<style scoped>
.img_section {
    background: url(../assets/unc_old_well.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    position: absolute;
    left: 0px;
    height: 100%;
}

.signin_signup_section {
    position: absolute;
    background: linear-gradient(.25turn, #ffffff, #f1f2f6);
    width: 50%;
    left: 50%;
    height: 100%;
}

.form_field:hover {
    border-color: "#ff5c00";
}

.form_button {
    display: flex;
    justify-content: flex-end;
}

.signin_signup_card {
    position: relative;
    width: 80%;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
}

.forgot_password {
    position: relative;
    margin: auto;
}

.sign_in_button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.nclex_title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    padding-top: 25px;
}

#unc_logo {
    height: 51px;
    width: 64px;
    float: left;
    cursor: pointer;
}

.website_title {
    display: block;
    line-height: 0.5;
    float: right;
}

.header_space {
    width: 15px;
}
</style>