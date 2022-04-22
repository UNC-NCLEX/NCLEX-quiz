<template>
<n-config-provider :theme-overrides="this.themeOverrides">
    <div class="img_section"></div>
    <div class="user_auth_section">
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
        <n-card class="user_auth_card">
        <n-tabs :default-value="id" size="large" justify-content="space-evenly" class="user_auth_tabs">
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
                    <n-form-item-row label="Onyen">
                        <n-input v-model:value="onyen" type="text" class="form_field" id="onyen" name="onyen" placeholder="Onyen"/>
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
                        <n-input v-model:value="email" type="text" class="form_field" id="email" name="email" placeholder="Email Address" backrground-color="#33FF90" color="#33FF90" />
                    </n-form-item-row>
                    <div class="form_button">
                        <n-button type="primary" color="#ff5c00" text-color="white" class="form_button" @click="handlePasswordRecovery">Send Recovery Email</n-button>
                    </div>
                </n-form>
            </n-tab-pane>
        </n-tabs>
        </n-card>
    </div>
</n-config-provider>
</template>

<script>
import { NCard, NTabs, NTabPane, NForm, NFormItemRow, NInput, NButton, NConfigProvider, useMessage } from "naive-ui";
import VueJwtDecode from 'vue-jwt-decode'
import { supabase } from "../supabase/init";

export default {
    name: "UserAuthenticationPage",
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
    props: ['id'],
    setup() {
        const message = useMessage();
        return {
            createSuccessMessage(msg, time) {
                message.success(msg, { duration: time });
            },
            createErrorMessage(msg, time) {
                message.error(msg, { duration: time });
            }
        }
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            onyen: "",
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
    
            // check if is in the roster

            if (resp.error == null) {
                let jwt = resp.data.access_token;
                this.setJWT(jwt);
                
                try {
                    let decoded = VueJwtDecode.decode(jwt);
                    this.setUID(decoded.sub);
                    this.setName(decoded.user_metadata.name);
                    this.setUserType(decoded.user_metadata.userType);
                    this.setEmail(decoded.email);
                    this.setOnyen(decoded.onyen)
                    this.signIn();
                    switch (this.$store.state.user.userType) {
                        case "student":
                            this.$router.push("/StudentDashboard");
                            break;
                        case "instructor":
                            this.$router.push("/InstructorDashboard");
                            break;
                        default:
                            this.createErrorMessage("User type not valid. Please contact your instructor.", 10000);
                            break;
                    }
                } catch (error) {
                    this.createErrorMessage("There was a problem logging in. Please contact your instructor.", 10000);
                    console.log(error);
                }
            } else {
                this.createErrorMessage("Invalid login credentials. Please check your credentials and try again.", 10000);
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
                    name: this.name,
                    userType: "student",
                    onyen: this.onyen
                }
            })

            if (resp.error == null) {
                this.createSuccessMessage("Success! Please check your email for a verification link before logging in.", 10000);
            } else {
                console.log(resp.error);
            }
        },
        async handlePasswordRecovery() {
            let { data, error } = await supabase.auth.api.resetPasswordForEmail(this.email);

            if (error == null) {
                this.createSuccessMessage("Success! Check your email for a link to change your password.", 10000);
            } else if (error.status == 429) {
                this.createErrorMessage("Too many requests. Please wait 60s before making another request.", 10000);
                console.log(error);
                console.log(data);
            } else {
                this.createErrorMessage("Invalid email address.", 10000);
                console.log(error);
                console.log(data);
            }
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
        },
        setUserType(userType) {
            this.$store.dispatch('setUserType', userType);
        },
        setOnyen(onyen) {
            this.$store.dispatch('setOnyen', onyen)
        },
        signIn() {
            this.$store.dispatch('signIn');
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

.user_auth_section {
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

.user_auth_card {
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