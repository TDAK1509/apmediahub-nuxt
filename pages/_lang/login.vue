<template>
    <v-card width="400" class="mx-auto mt-10">
        <v-card-title class="grey lighten-2 py-0">
            <LoginHeader>{{$t("login.login")}}</LoginHeader>
        </v-card-title>

        <v-card-text>
            <v-form class="mt-3" ref="form">
                <v-text-field
                    label="Email"
                    type="email"
                    prepend-icon="mdi-email"
                    color="success"
                    :rules="emailRules"
                    v-model="email"
                ></v-text-field>

                <v-text-field
                    :label="$t('form.field.password')"
                    :type="passwordFieldType"
                    :append-icon="passwordEyeIcon"
                    prepend-icon="mdi-lock"
                    color="success"
                    :rules="passwordRules"
                    v-model="password"
                    @click:append="showPassword = !showPassword"
                ></v-text-field>

                <v-checkbox
                    :label="$t('login.remember_me')"
                    color="black black--text"
                    v-model="remember"
                ></v-checkbox>

                <p class="error--text" v-show="error" ref="errorMessage">{{ error }}</p>

                <v-card flat class="d-flex justify-space-between align-center">
                    <nuxt-link
                        class="black--text text-capitalize link"
                        :to="`/${locale}/register`"
                    >{{$t("login.create_new_account")}}</nuxt-link>

                    <v-btn
                        color="primary"
                        class="px-8"
                        ref="loginButton"
                        :loading="isLoggingIn"
                        :disabled="isLoggingIn"
                        @click="login"
                    >{{$t("login.login")}}</v-btn>
                </v-card>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapState } from "vuex";
import animationMixin from "~/mixins/animations";
import LoginHeader from "~/components/LoginHeader";

export default {
    name: "Login",

    transition: "bounce",

    components: {
        LoginHeader
    },

    mixins: [animationMixin],

    computed: {
        ...mapState(["locale"]),

        passwordFieldType() {
            return this.showPassword ? "text" : "password";
        },

        passwordEyeIcon() {
            return this.showPassword ? "mdi-eye" : "mdi-eye-off";
        }
    },

    data() {
        return {
            isLoggingIn: false,

            email: "",
            password: "",
            remember: true,
            error: "",

            showPassword: false,

            emailRules: [
                v => !!v || this.$t("form.error.email_required"),
                v => /.+@.+\..+/.test(v) || this.$t("form.error.email_invalid")
            ],

            passwordRules: [v => !!v || this.$t("form.error.password_blank")]
        };
    },

    methods: {
        async login() {
            if (!this.$refs.form.validate()) {
                this.shakeItOff(this.$refs.loginButton.$el);
                return false;
            }

            try {
                this.isLoggingIn = true;

                const data = {
                    email: this.email,
                    password: this.password,
                    remember: this.remember
                };

                const response = await this.__postToServer(data);

                if (response.success === false) {
                    this.error = this.$t("form.error.wrong_email_password");
                } else {
                    this.error = "";
                    this.$router.push(`/${this.locale}/dashboard`);
                }
            } catch (error) {
                this.error = this.$t("form.error.server");
            } finally {
                this.isLoggingIn = false;

                if (this.error) {
                    this.shakeItOff(this.$refs.errorMessage);
                }
            }
        },

        async __postToServer(data) {
            let response = await this.$axios.$post("/api/user/login", data);
            return response;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/animation.scss";
</style>