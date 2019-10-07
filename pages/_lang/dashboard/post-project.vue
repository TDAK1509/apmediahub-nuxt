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
                        <DatePicker
                            :value.sync="formModel.closing_date"
                            :rules="[inputRules.required]"
                        ></DatePicker>

                        <SelectCountry
                            :value.sync="formModel.country"
                            :rules="[inputRules.required]"
                        ></SelectCountry>

                        <SelectCity
                            :value.sync="formModel.city"
                            :country="formModel.country"
                            :rules="[inputRules.required]"
                        ></SelectCity>

                        <v-textarea
                            outlined
                            :color="inputBorderColor"
                            :label="$t('post_project.project_name')"
                            v-model="formModel.name"
                            :rules="[inputRules.required]"
                            clearable
                        ></v-textarea>

                        <v-textarea
                            outlined
                            :color="inputBorderColor"
                            :label="$t('post_project.project_description')"
                            v-model="formModel.description"
                            clearable
                        ></v-textarea>

                        <ThePostProjectProjectCategory
                            :value.sync="formModel.category"
                            :rules="[inputRules.required]"
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

                        <ThePostProjectProjectType :value.sync="formModel.type"></ThePostProjectProjectType>

                        <ThePostProjectPayment :value.sync="formModel.payment"></ThePostProjectPayment>

                        <div>
                            <h4 class="subhead">{{ $t("project_duration.project_duration") }}</h4>
                            <RadioList :list="projectDurationList" :value.sync="formModel.duration"></RadioList>
                        </div>

                        <div>
                            <h4
                                class="subhead"
                            >{{ $t("project_time_requirement.time_requirement") }}</h4>
                            <RadioList
                                :list="projectTimeRequirementList"
                                :value.sync="formModel.time_requirement"
                            ></RadioList>
                        </div>

                        <v-file-input
                            show-size
                            outlined
                            :label="$t('post_job.attachment')"
                            append-icon="mdi-paperclip"
                            prepend-icon
                        ></v-file-input>

                        <DashboardWhoCanSee :value.sync="formModel.who_can_see"></DashboardWhoCanSee>

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
import projectDurationList from "~/mixins/project-duration-list";
import projectTimeRequirementList from "~/mixins/project-time-requirement-list";
import ThePostProjectProjectCategory from "@/components/ThePostProjectProjectCategory";
import DashboardServiceLevel from "@/components/DashboardServiceLevel";
import ThePostProjectProjectType from "@/components/ThePostProjectProjectType";
import ThePostProjectPayment from "@/components/ThePostProjectPayment";
import DashboardWhoCanSee from "@/components/DashboardWhoCanSee";

export default {
    name: "PostProject",

    components: {
        ThePostProjectProjectCategory,
        DashboardServiceLevel,
        ThePostProjectProjectType,
        ThePostProjectPayment,
        DashboardWhoCanSee
    },

    mixins: [
        dashboardTitleMixin,
        inputRules,
        projectDurationList,
        projectTimeRequirementList
    ],

    data() {
        return {
            posting: false,

            formModel: {
                closing_date: new Date().toISOString().substr(0, 10),
                country: "",
                city: "",
                name: "",
                description: "",
                category: null,
                skills: "",
                service_level: "",
                type: "",
                payment: null,
                duration: "",
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