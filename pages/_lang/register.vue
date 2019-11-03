<template>
    <v-card width="400" class="mx-auto mt-10">
        <v-card-title class="grey lighten-2 py-0">
            <LoginHeader>{{$t("register.register")}}</LoginHeader>
        </v-card-title>

        <v-card-text>
            <v-form class="mt-3" ref="form">
                <v-select
                    :items="roles"
                    item-text="text"
                    item-value="value"
                    :label="$t('register.register_as')"
                    color="success"
                    item-color="success"
                    prepend-icon="mdi-account"
                    v-model="role"
                ></v-select>

                <v-text-field
                    label="Email"
                    type="email"
                    prepend-icon="mdi-email"
                    color="success"
                    :rules="formRules.email"
                    v-model="email"
                ></v-text-field>

                <v-text-field
                    :label="$t('form.field.password')"
                    type="password"
                    prepend-icon="mdi-lock"
                    color="success"
                    :rules="formRules.password"
                    v-model="password"
                ></v-text-field>

                <v-text-field
                    :label="$t('form.field.password_confirm')"
                    type="password"
                    prepend-icon="mdi-lock"
                    color="success"
                    :rules="formRules.password"
                    v-model="passwordConfirm"
                ></v-text-field>

                <transition name="slideX">
                    <v-text-field
                        :label="$t('form.field.company')"
                        type="text"
                        prepend-icon="mdi-lock"
                        color="success"
                        :rules="formRules.notEmpty"
                        v-model="company"
                        v-if="isClient || isAgency"
                    ></v-text-field>
                </transition>
                <transition name="slideX">
                    <v-text-field
                        :label="$t('form.field.full_name')"
                        type="text"
                        prepend-icon="mdi-lock"
                        color="success"
                        :rules="formRules.notEmpty"
                        v-model="fullName"
                        v-if="!isAgency"
                    ></v-text-field>
                </transition>

                <div class="dummy-space mt-1">apmediahub</div>

                <p class="error--text" v-show="error" ref="errorMessage">{{ error }}</p>

                <v-card flat class="d-flex justify-space-between align-center">
                    <v-container fluid class="d-flex justify-space-between align-center pa-0">
                        <nuxt-link
                            class="black--text text-capitalize link"
                            :to="`/${locale}/login`"
                        >{{$t("login.login")}}</nuxt-link>

                        <v-btn
                            color="primary"
                            class="px-8"
                            ref="registerButton"
                            :loading="isRegistering"
                            :disabled="isRegistering"
                            @click="register"
                        >Register</v-btn>
                    </v-container>
                </v-card>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import userRoles from "~/utils/user-roles";
import { mapState } from "vuex";
import animationMixin from "~/mixins/animations";
import LoginHeader from "~/components/LoginHeader";

export default {
    name: "Register",

    components: {
        LoginHeader
    },

    mixins: [animationMixin],

    data() {
        return {
            isRegistering: false,

            email: "",
            password: "",
            passwordConfirm: "",
            company: "",
            fullName: "",
            role: userRoles.CLIENT,

            error: "",

            formRules: {
                email: [
                    v => !!v || this.$t("form.error.email_required"),
                    v =>
                        /.+@.+\..+/.test(v) ||
                        this.$t("form.error.email_invalid")
                ],
                password: [
                    v => !!v || this.$t("form.error.password_blank"),
                    v => v.length >= 6 || this.$t("form.error.password_short")
                ],
                notEmpty: [v => !!v || this.$t("form.error.empty")]
            }
        };
    },

    computed: {
        ...mapState(["locale"]),

        isClient() {
            return this.role === userRoles.CLIENT;
        },

        isAgency() {
            return this.role === userRoles.AGENCY;
        },

        isJournalist() {
            return this.role === userRoles.JOURNALIST;
        },

        isFreelancer() {
            return this.role === userRoles.FREELANCER;
        },

        roles() {
            return [
                { text: this.$t("user.role.client"), value: userRoles.CLIENT },
                { text: this.$t("user.role.agency"), value: userRoles.AGENCY },
                {
                    text: this.$t("user.role.journalist"),
                    value: userRoles.JOURNALIST
                },
                {
                    text: this.$t("user.role.freelancer"),
                    value: userRoles.FREELANCER
                }
            ];
        }
    },

    methods: {
        async register() {
            this.isRegistering = true;

            try {
                if (!this.$refs.form.validate()) {
                    throw { customError: "" };
                }

                if (this.password !== this.passwordConfirm) {
                    throw {
                        customError: this.$t("form.error.password_not_match")
                    };
                }

                const data = this.__preparePostData();

                const response = await this.__postToServer(data);

                if (response.success === false) {
                    throw {
                        customError: this.$t(`form.error.${response.error_key}`)
                    };
                } else {
                    this.error = "";
                    this.$router.push(`/${this.locale}/dashboard`);
                }
            } catch (error) {
                this.shakeItOff(this.$refs.registerButton.$el);

                if (false !== error.customError) {
                    this.error = error.customError;
                } else {
                    this.error = this.$t("form.error.server");
                }
            } finally {
                this.isRegistering = false;

                if (this.error) {
                    this.shakeItOff(this.$refs.errorMessage);
                }
            }
        },

        __preparePostData() {
            const data = {
                role: this.role,
                email: this.email,
                password: this.password
            };

            if (this.isClient || this.isAgency) data.company = this.company;
            if (!this.Agency) data.full_name = this.fullName;

            return data;
        },

        async __postToServer(data) {
            // let response = await fetch("/api/user/register", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(data)
            // });

            // const statusCode = response.status;
            // const result = await response.json();
            // result.statusCode = statusCode;

            // return result;

            let response = await this.$axios.$post("/api/user/register", data);
            return response;
        },

        __presetRole() {
            let role = this.$route.query.role;
            role = role ? parseInt(role) : userRoles.CLIENT;

            if (role <= 4 && role > 0) {
                this.role = role;
            }
        }
    },

    mounted() {
        this.__presetRole();
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/animation.scss";
@import "@/assets/scss/transitions.scss";

.dummy-space {
    opacity: 0;
}
</style>