<template>
    <div>
        <h4 class="subhead">{{ $t("post_project.who_can_see") }}</h4>

        <v-radio-group v-model="radio" column class="flex-grow-1 mt-2" @change="onRadioChange">
            <v-radio
                v-for="(item, i) in whoCanSee.agencies"
                :key="`agency-${i}`"
                :label="item.text"
                :value="item.value"
                :color="inputBorderColor"
            ></v-radio>
        </v-radio-group>

        <v-radio-group v-model="radio2" column class="flex-grow-1 mt-2" @change="onRadioChange">
            <v-radio
                v-for="(item, i) in whoCanSee.freelancers"
                :key="`freelancer${i}`"
                :label="item.text"
                :value="item.value"
                :color="inputBorderColor"
            ></v-radio>
        </v-radio-group>
    </div>
</template>

<script>
export default {
    name: "WhoCanSee",

    data() {
        return {
            radio: "",
            radio2: "",

            selectedAgencies: [],
            selectedFreelancers: [],

            whoCanSee: {
                agencies: [
                    {
                        text: this.$t("who_can_see.all_agencies"),
                        value: 1
                    },

                    {
                        text: this.$t("who_can_see.search_agencies"),
                        value: 2
                    },

                    {
                        text: this.$t("who_can_see.my_contact_agencies"),
                        value: 3
                    }
                ],

                freelancers: [
                    {
                        text: this.$t("who_can_see.all_freelancers"),
                        value: 5
                    },

                    {
                        text: this.$t("who_can_see.search_freelancers"),
                        value: 6
                    },

                    {
                        text: this.$t("who_can_see.my_contact_freelancers"),
                        value: 7
                    }
                ]
            }
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        userIdList() {
            return [...this.selectedAgencies, ...this.selectedFreelancers];
        }
    },

    watch: {
        userIdList(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    },

    methods: {
        async getAllAgencies() {
            const userIdList = await this.apiGetUserIdListByRole("agency");
            this.selectedAgencies = [...userIdList];
        },

        async getAgenciesInMyContact() {
            this.selectedAgencies = [11];
        },

        async getSearchAgencies() {
            this.selectedAgencies = [15];
        },

        async getAllFreelancers() {
            const userIdList = await this.apiGetUserIdListByRole("freelancer");
            this.selectedFreelancers = [...userIdList];
        },

        async getFreelancersInMyContact() {
            this.selectedFreelancers = [13];
        },

        async getSearchFreelancers() {
            this.selectedFreelancers = [23];
        },

        onRadioChange(value) {
            switch (value) {
                case 1:
                    return this.getAllAgencies();
                case 2:
                    return this.getAgenciesInMyContact();
                case 3:
                    return this.getSearchAgencies();
                case 5:
                    return this.getAllFreelancers();
                case 6:
                    return this.getFreelancersInMyContact();
                case 7:
                    return this.getSearchFreelancers();
                default:
                    return false;
            }
        }
    }
};
</script>

<style>
</style>