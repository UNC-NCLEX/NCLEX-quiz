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
            <n-tab-pane name="signin" tab="Recover Password">
                <n-form>
                    <n-form-item-row label="Password">
                        <n-input v-model:value="password" type="password" show-password-on="mousedown" class="form_field" id="password" name="password" placeholder="Password" :maxlength="64"/>
                    </n-form-item-row>
                    <n-form-item-row label="Confirm Password">
                        <n-input v-model:value="confirmPassword" type="password" show-password-on="mousedown" class="form_field" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" :maxlength="64"/>
                    </n-form-item-row>
                </n-form>
                <div class="form_button">
                    <n-button type="primary" color="#ff5c00" text-color="white" @click="updateUser">Submit</n-button>
                </div>
            </n-tab-pane>
        </n-tabs>
        </n-card>
    </div>
</n-config-provider>
</template>

<script>
import { NCard, NTabs, NTabPane, NForm, NFormItemRow, NInput, NButton, NConfigProvider, useMessage } from "naive-ui";
import { supabase } from "../supabase/init";

export default {
    name: "PasswordRecovery",
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
        async updateUser() {
            const { data, error } = await supabase.auth.api.updateUser(
                this.$store.state.user.jwt, { password: this.password }
            )

            this.$store.state.user.jwt = "";
            if (error == null) {
                this.createSuccessMessage("Success! Redirecting you to sign in page...", 3000);
                setTimeout(() => {
                    this.$router.push("/Auth");
                }, 3000);
            } else {
                this.createErrorMessage("There was a problem updating your password.", 10000);
                console.log(error);
                console.log(data);
            }
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