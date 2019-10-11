<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="2">
                <v-form ref="form" class="text-left filter-panel pr-7">
                    <TheSearchForAgencySearchSelector @change="updateSearchValues"></TheSearchForAgencySearchSelector>

                    <div class="d-flex justify-start">
                        <v-btn
                            color="primary"
                            class="px-8"
                            ref="postButton"
                            :loading="searching"
                            :disabled="searching"
                            @click="doSearchAction"
                        >
                            {{$t("common.search")}}
                            <v-icon right dark>mdi-magnify</v-icon>
                        </v-btn>
                    </div>
                </v-form>
            </v-col>

            <v-col cols="12" sm="10">
                <v-text-field
                    label="Type something here"
                    outlined
                    single-line
                    append-icon="mdi-magnify"
                    class="bold"
                    @input="doSearchAction"
                ></v-text-field>

                <TheSearchForAgencySearchPanel
                    :countries="countries"
                    :cities="cities"
                    :services="servicesForSearchFilter"
                    @removeCountry="removeFromSelectedCountries"
                    @removeCity="removeFromSelectedCities"
                    @removeService="removeFromSelectedServices"
                ></TheSearchForAgencySearchPanel>

                <DashboardSearchResultWrapper
                    v-show="users.length"
                    :users="users"
                    :value.sync="userIdList"
                    chip-field-name="services"
                ></DashboardSearchResultWrapper>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import mixinDashboardTitle from "~/mixins/dashboard-title";

import TheSearchForAgencySearchPanel from "@/components/TheSearchForAgencySearchPanel";
import TheSearchForAgencySearchSelector from "@/components/TheSearchForAgencySearchSelector";
import DashboardSearchResultWrapper from "@/components/DashboardSearchResultWrapper";

export default {
    name: "SearchForAgency",

    mixins: [mixinDashboardTitle],

    components: {
        TheSearchForAgencySearchPanel,
        TheSearchForAgencySearchSelector,
        DashboardSearchResultWrapper
    },

    data() {
        return {
            searching: false,

            countries: [],
            cities: [],
            serviceLevel: "",
            services: [],

            userIdList: [],

            users: [
                {
                    _id: "haha",
                    name: "hihi",
                    rating: 4.5,
                    avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                    company: "APMediahub",
                    job_title: "Web Designer",
                    full_name: "Tran Duy An Khuong",
                    services: ["hahaa", "HTML5", "Audio/Video Production"],
                    website: "https://www.google.com"
                },
                {
                    _id: "haha1",
                    name: "hihidfafd",
                    rating: 4,
                    avatar:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPcapaC3wvjcgD8eG-kv5yDba2WHNRrpoNujxdDwiH2W6enlU",
                    company: "Twice",
                    job_title: "Singer",
                    full_name: "Chou Tzu-yu",
                    services: ["Beautiful", "Angel", "Sing Shoot Dance"],
                    facebook: "https://www.facebook.com/TzuyuChou.fc/"
                }
            ]
        };
    },

    computed: {
        title() {
            return this.$t("common.search") + " " + this.$t("user.role.agency");
        },

        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        servicesForSearchFilter() {
            return this.services.map(key => {
                // Add .child between 2 parts of key
                let arrayKeys = key.split(".");
                arrayKeys.splice(1, 0, "child");

                const localeSuffix = arrayKeys.join(".");

                return {
                    text: this.$t(`services.${localeSuffix}`),
                    value: key
                };
            });
        }
    },

    methods: {
        removeFromSelectedCountries(country) {
            const index = this.countries.indexOf(country);
            this.countries.splice(index, 1);
        },

        removeFromSelectedCities(city) {
            const index = this.cities.indexOf(city);
            this.cities.splice(index, 1);
        },

        removeFromSelectedServices(service) {
            const index = this.services.indexOf(service);
            this.services.splice(index, 1);
        },

        updateSearchValues({ key, value }) {
            this[key] = value;
        },

        async doSearchAction() {
            const users = [{ _id: "haha", name: "hihi" }];
            this.users = [...users];
        }
    }
};
</script>

<style lang="scss" scoped>
.filter-panel {
    border-right: 1px solid #e0e0e0;
}
</style>