<template>
    <v-row>
        <v-col justify="center" align="center">
            <v-card max-width="700">
                <v-card-title class="d-flex flex-column">
                    <div class="d-flex align-center">
                        <v-avatar size="36px">
                            <img :src="avatar" alt="Avatar / Logo" />
                        </v-avatar>

                        <h4 class="headline ml-5">Company name</h4>
                    </div>

                    <h4
                        class="headline text-uppercase mt-2 primary--text"
                    >{{$t('post_job.job_description')}}</h4>
                </v-card-title>
                <v-card-text class="black--text">
                    <v-form ref="form" class="text-left">
                        <div class="job-description">
                            <v-subheader
                                class="px-0 text-uppercase"
                            >{{$t('post_job.general_information')}}</v-subheader>

                            <DatePicker :value.sync="formModel.closing_date"></DatePicker>

                            <template v-for="f in formTextField">
                                <SelectCountry
                                    v-if="f.value_key === 'country'"
                                    :value.sync="formModel.country"
                                ></SelectCountry>

                                <SelectCity
                                    v-else-if="f.value_key === 'city'"
                                    :value.sync="formModel.city"
                                    :country="formModel.country"
                                ></SelectCity>

                                <ThePostJobJobType
                                    v-else-if="f.value_key === 'job_type'"
                                    :value.sync="formModel.job_type"
                                />

                                <v-text-field
                                    v-else
                                    :key="f.value_key"
                                    :label="$t(f.label_key)"
                                    type="text"
                                    outlined
                                    :color="inputBorderColor"
                                    :rules="f.rules"
                                    v-model="formModel[f.value_key]"
                                    clearable
                                ></v-text-field>
                            </template>

                            <v-subheader class="px-0 text-uppercase">{{$t('post_job.details')}}</v-subheader>

                            <v-textarea
                                v-for="f in formTextArea"
                                outlined
                                :color="inputBorderColor"
                                :key="f.value_key"
                                :label="$t(f.label_key)"
                                v-model="formModel[f.value_key]"
                                clearable
                            ></v-textarea>

                            <v-subheader class="px-0 text-uppercase">{{$t('post_job.attachment')}}</v-subheader>

                            <v-file-input
                                show-size
                                outlined
                                :label="$t('post_job.job_description')"
                                append-icon="mdi-paperclip"
                                prepend-icon
                            ></v-file-input>

                            <v-file-input
                                show-size
                                outlined
                                :label="$t('post_job.application_form')"
                                append-icon="mdi-paperclip"
                                prepend-icon
                            ></v-file-input>

                            <DashboardWhoCanSee :value.sync="formModel.who_can_see"></DashboardWhoCanSee>
                        </div>

                        <div class="d-flex justify-end">
                            <v-btn
                                color="primary"
                                class="px-8"
                                ref="postButton"
                                :loading="posting"
                                :disabled="posting"
                                @click="postJob"
                            >{{$t("dashboard.post_job")}}</v-btn>
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import defaultAvatar from "@/assets/images/avatar_default.jpg";
import dashboardTitleMixin from "~/mixins/dashboard-title";
import inputRules from "~/mixins/input-rules";
import ThePostJobJobType from "@/components/ThePostJobJobType";
import DashboardWhoCanSee from "@/components/DashboardWhoCanSee";

export default {
    name: "PostJob",

    components: {
        ThePostJobJobType,
        DashboardWhoCanSee
    },

    mixins: [dashboardTitleMixin, inputRules],

    data() {
        return {
            showClosingDatePicker: false,
            posting: false,

            formModel: {
                job_title: "",
                job_id: "",
                post_date: new Date().toISOString().substr(0, 10),
                closing_date: new Date().toISOString().substr(0, 10),
                country: "",
                city: "",
                job_type: "",
                department: "",
                reports_to: "",
                job_purpose: "",
                company_overview: "",
                responsibilities: "",
                competencies: "",
                qualifications_experiences: "",
                challenges_opportunities: "",
                attachment: {
                    job_description: "",
                    application_form: ""
                },
                who_can_see: null
            }
        };
    },

    computed: {
        title() {
            return this.$t("dashboard.post_job");
        },

        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        avatar() {
            return defaultAvatar;
        },

        formTextField() {
            return [
                {
                    label_key: "my_information.job_title",
                    value_key: "job_title",
                    rules: [this.inputRules.required]
                },
                {
                    label_key: "post_job.job_id",
                    value_key: "job_id",
                    rules: []
                },
                {
                    label_key: "common.country",
                    value_key: "country",
                    rules: [this.inputRules.required]
                },
                {
                    label_key: "common.city",
                    value_key: "city",
                    rules: [this.inputRules.required]
                },
                {
                    label_key: "post_job.job_type",
                    value_key: "job_type",
                    rules: [this.inputRules.required]
                },
                {
                    label_key: "post_job.department",
                    value_key: "department",
                    rules: []
                },
                {
                    label_key: "post_job.reports_to",
                    value_key: "reports_to",
                    rules: []
                },
                {
                    label_key: "post_job.job_purpose",
                    value_key: "job_purpose",
                    rules: []
                }
            ];
        },

        formTextArea() {
            return [
                {
                    label_key: "post_job.company_overview",
                    value_key: "company_overview",
                    rules: []
                },
                {
                    label_key: "post_job.key_responsibilities",
                    value_key: "responsibilities",
                    rules: []
                },
                {
                    label_key: "post_job.competencies",
                    value_key: "competencies",
                    rules: []
                },
                {
                    label_key: "post_job.qualifications_experiences",
                    value_key: "qualifications_experiences",
                    rules: []
                },
                {
                    label_key: "post_job.challenges_opportunities",
                    value_key: "challenges_opportunities",
                    rules: []
                }
            ];
        },

        whoCanSeeJournalist() {
            return [
                {
                    text: "All Journalist",
                    value: ""
                },
                {
                    text: "Journalist who I will search now",
                    value: ""
                },
                {
                    text: "Journalist in My Contact",
                    value: ""
                },
                {
                    text: "Journalist in the selected list",
                    value: ""
                }
            ];
        },

        whoCanSeeFreelancer() {
            return [
                {
                    text: "All Freelancer",
                    value: ""
                },
                {
                    text: "Freelancer who I will search now",
                    value: ""
                },
                {
                    text: "Freelancer in My Contact",
                    value: ""
                },
                {
                    text: "Freelancer in the selected list",
                    value: ""
                }
            ];
        }
    },
    methods: {
        postJob() {
            console.table("job posted");
        }
    }
};
</script>

<style lang="scss" scoped>
.form-container {
    max-width: 400px;
}
</style>