<template>
    <v-container fluid>
        <v-row>
            <DashboardSearchUserColumnLeft>
                <div class="text-left pr-7">
                    <button
                        class="clear-filter mb-4 primary--text body-2"
                        type="button"
                        @click="clearFilter"
                    >
                        <v-icon left small color="primary">mdi-filter-remove</v-icon>
                        {{ $t('search_user.clear_filter') }}
                    </button>
                </div>

                <v-form ref="form" class="text-left filter-panel pr-7">
                    <DashboardSearchFilters
                        showCountries
                        showCities
                        showSegments
                        showMedia
                        showJobTitles
                        showLanguages
                        @change="updateSearchValues"
                    ></DashboardSearchFilters>
                </v-form>
            </DashboardSearchUserColumnLeft>

            <DashboardSearchUserColumnRight>
                <v-text-field
                    label="Type something here"
                    outlined
                    single-line
                    append-icon="mdi-magnify"
                    class="mb-4"
                    @input="doSearchAction"
                    hide-details
                ></v-text-field>

                <DashboardSearchPanel :items="searchPanelItems" @remove="removeFromSearchPanel"></DashboardSearchPanel>

                <DashboardSearchResultWrapper
                    v-show="users.length"
                    :users="users"
                    :value.sync="userIdList"
                    chip-field-name="services"
                ></DashboardSearchResultWrapper>
            </DashboardSearchUserColumnRight>
        </v-row>
    </v-container>
</template>

<script>
import mixinDashboardTitle from "~/mixins/dashboard-title";
import DashboardSearchResultWrapper from "@/components/DashboardSearchResultWrapper";
import DashboardSearchFilters from "@/components/DashboardSearchFilters";
import DashboardSearchPanel from "@/components/DashboardSearchPanel";
import DashboardSearchUserColumnLeft from "@/components/DashboardSearchUserColumnLeft";
import DashboardSearchUserColumnRight from "@/components/DashboardSearchUserColumnRight";

export default {
    name: "SearchForJournalist",

    mixins: [mixinDashboardTitle],

    components: {
        DashboardSearchResultWrapper,
        DashboardSearchFilters,
        DashboardSearchPanel,
        DashboardSearchUserColumnLeft,
        DashboardSearchUserColumnRight
    },

    data() {
        return {
            searching: false,

            countries: [],
            cities: [],
            segments: [],
            media: [],
            jobTitles: [],
            languages: [],

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
            return (
                this.$t("common.search") + " " + this.$t("user.role.journalist")
            );
        },

        searchPanelItems() {
            return {
                countries: this.countriesForSearchFilter,
                cities: this.citiesForSearchFilter,
                segments: this.segmentsForSearchFilter,
                media: this.mediaForSearchFilter,
                jobTitles: this.jobTitlesForSearchFilter,
                languages: this.languagesForSearchFilter
            };
        },

        countriesForSearchFilter() {
            return this.countries.map(country => {
                return { text: country, value: country };
            });
        },

        citiesForSearchFilter() {
            return this.cities.map(city => {
                return { text: city, value: city };
            });
        },

        segmentsForSearchFilter() {
            return this.segments.map(key => {
                // Add .child between 2 parts of key
                let arrayKeys = key.split(".");
                arrayKeys.splice(1, 0, "child");

                const localeSuffix = arrayKeys.join(".");

                return {
                    text: this.$t(`segments.${localeSuffix}`),
                    value: key
                };
            });
        },

        mediaForSearchFilter() {
            return this.media.map(key => {
                // Add .child between 2 parts of key
                let arrayKeys = key.split(".");
                arrayKeys.splice(1, 0, "child");

                const localeSuffix = arrayKeys.join(".");

                return {
                    text: this.$t(`media.${localeSuffix}`),
                    value: key
                };
            });
        },

        jobTitlesForSearchFilter() {
            return this.jobTitles.map(jobTitle => {
                return {
                    text: this.$t(`journalist_job_title.${jobTitle}`),
                    value: jobTitle
                };
            });
        },

        languagesForSearchFilter() {
            return this.languages.map(language => {
                return {
                    text: language,
                    value: language
                };
            });
        }
    },

    methods: {
        removeFromSearchPanel({ key, value }) {
            const index = this[key].indexOf(value);
            this[key].splice(index, 1);
        },

        updateSearchValues({ key, value }) {
            this[key] = value;
        },

        clearFilter() {
            this.countries.splice(0);
            this.cities.splice(0);
            this.segments.splice(0);
            this.media.splice(0);
            this.jobTitles.splice(0);
            this.languages.splice(0);
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

.clear-filter {
    border-bottom: 1px solid transparent;

    &:hover {
        border-bottom: 1px solid #ccc;
    }
}
</style>