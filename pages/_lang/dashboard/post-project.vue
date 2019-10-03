<template>
    <v-row>
        <v-col justify="center" align="center">
            <v-card max-width="700">
                <v-card-title class="d-flex flex-column">
                    <h4
                        class="headline text-uppercase primary--text"
                    >{{$t('post_project.project_description')}}</h4>
                </v-card-title>

                <v-card-text class="black--text">
                    <v-form ref="form" class="text-left">
                        <DatePicker :value.sync="formModel.closing_date" :rules="rules.required"></DatePicker>

                        <SelectCountry :value.sync="formModel.country" :rules="rules.required"></SelectCountry>

                        <SelectCity
                            :value.sync="formModel.city"
                            :country="formModel.country"
                            :rules="rules.required"
                        ></SelectCity>

                        <v-textarea
                            outlined
                            :color="inputBorderColor"
                            :label="$t('post_project.project_name')"
                            v-model="formModel.project_name"
                            :rules="rules.required"
                            clearable
                        ></v-textarea>

                        <v-textarea
                            outlined
                            :color="inputBorderColor"
                            :label="$t('post_project.project_description')"
                            v-model="formModel.project_description"
                            clearable
                        ></v-textarea>

                        <ThePostProjectProjectCategory
                            :value.sync="formModel.project_category"
                            :rules="rules.required"
                        ></ThePostProjectProjectCategory>

                        <v-text-field
                            :label="$t('post_project.skills')"
                            type="text"
                            outlined
                            :color="inputBorderColor"
                            v-model="formModel.skills"
                            clearable
                        ></v-text-field>

                        <DashboardServiceLevel :value.sync="formModel.service_level"></DashboardServiceLevel>

                        <ThePostProjectProjectType :value.sync="formModel.project_type"></ThePostProjectProjectType>

                        <ThePostProjectPayment></ThePostProjectPayment>

                        <div class="d-flex justify-end">
                            <v-btn
                                color="primary"
                                class="px-8"
                                ref="postButton"
                                :loading="posting"
                                :disabled="posting"
                                @click="postProject"
                            >{{$t("dashboard.post_project")}}</v-btn>
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import dashboardTitleMixin from "~/mixins/dashboard-title";
import inputRules from "~/mixins/input-rules";
import ThePostProjectProjectCategory from "@/components/ThePostProjectProjectCategory";
import DashboardServiceLevel from "@/components/DashboardServiceLevel";
import ThePostProjectProjectType from "@/components/ThePostProjectProjectType";
import ThePostProjectPayment from "@/components/ThePostProjectPayment";

export default {
    name: "PostProject",

    components: {
        ThePostProjectProjectCategory,
        DashboardServiceLevel,
        ThePostProjectProjectType,
        ThePostProjectPayment
    },

    mixins: [dashboardTitleMixin, inputRules],

    data() {
        return {
            posting: false,

            formModel: {
                closing_date: new Date().toISOString().substr(0, 10),
                country: "",
                city: "",
                project_name: "",
                project_description: "",
                project_category: null,
                skills: "",
                service_level: "",
                project_type: "",
                payment_method: "",
                payment_amount: "",
                project_duration: "",
                time_requirement: "",
                attachment: "",
                who_can_see: null
            }
        };
    },

    computed: {
        title() {
            return this.$t("dashboard.post_project");
        },

        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    },

    methods: {
        postProject() {}
    }
};
</script>

<style>
</style>