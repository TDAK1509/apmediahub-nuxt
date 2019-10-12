<template>
    <div>
        <div class="countries-container" v-if="showCountries">
            <DashboardSearchFiltersCountries :value.sync="countries"></DashboardSearchFiltersCountries>
        </div>

        <div class="cities-container mt-5" v-if="showCities">
            <DashboardSearchFiltersCities :countries="countries" :value.sync="cities"></DashboardSearchFiltersCities>
        </div>

        <div class="services-container mt-5" v-if="showServices">
            <DashboardSearchFiltersServices :value.sync="services"></DashboardSearchFiltersServices>
        </div>

        <div class="service-levels-container mt-5" v-if="showServiceLevels">
            <DashboardSearchFiltersServiceLevels :value.sync="serviceLevels"></DashboardSearchFiltersServiceLevels>
        </div>

        <div class="segments-container mt-5" v-if="showSegments">
            <DashboardSearchFiltersSegments :value.sync="segments"></DashboardSearchFiltersSegments>
        </div>

        <div class="media-container mt-5" v-if="showMedia">
            <DashboardSearchFiltersMedia :value.sync="media"></DashboardSearchFiltersMedia>
        </div>

        <div class="job-title-container mt-5" v-if="showJobTitles">
            <DashboardSearchFiltersJobTitles :value.sync="jobTitles"></DashboardSearchFiltersJobTitles>
        </div>

        <div class="language-container mt-5" v-if="showLanguages">
            <DashboardSearchFiltersLanguages :value.sync="languages"></DashboardSearchFiltersLanguages>
        </div>
    </div>
</template>

<script>
import DashboardSearchFiltersCities from "./DashboardSearchFiltersCities";
import DashboardSearchFiltersCountries from "./DashboardSearchFiltersCountries";
import DashboardSearchFiltersJobTitles from "./DashboardSearchFiltersJobTitles";
import DashboardSearchFiltersLanguages from "./DashboardSearchFiltersLanguages";
import DashboardSearchFiltersMedia from "./DashboardSearchFiltersMedia";
import DashboardSearchFiltersSegments from "./DashboardSearchFiltersSegments";
import DashboardSearchFiltersServiceLevels from "./DashboardSearchFiltersServiceLevels";
import DashboardSearchFiltersServices from "./DashboardSearchFiltersServices";

export default {
    name: "DashboardSearchFilters",

    components: {
        DashboardSearchFiltersCities,
        DashboardSearchFiltersCountries,
        DashboardSearchFiltersJobTitles,
        DashboardSearchFiltersLanguages,
        DashboardSearchFiltersMedia,
        DashboardSearchFiltersSegments,
        DashboardSearchFiltersServiceLevels,
        DashboardSearchFiltersServices
    },

    props: {
        showCountries: Boolean,
        showCities: Boolean,
        showServices: Boolean,
        showServiceLevels: Boolean,
        showSegments: Boolean,
        showMedia: Boolean,
        showJobTitles: Boolean,
        showLanguages: Boolean
    },

    data() {
        return {
            countries: [],
            cities: [],
            services: [],
            serviceLevels: [],
            segments: [],
            media: [],
            jobTitles: [],
            languages: []
        };
    },

    watch: {
        countries(newValue, oldValue) {
            this.$emit("change", { key: "countries", value: newValue });
        },

        cities(newValue, oldValue) {
            this.$emit("change", { key: "cities", value: newValue });
        },

        services(newValue, oldValue) {
            this.$emit("change", { key: "services", value: newValue });
        },

        serviceLevels(newValue, oldValue) {
            this.$emit("change", { key: "serviceLevels", value: newValue });
        },

        segments(newValue, oldValue) {
            this.$emit("change", { key: "segments", value: newValue });
        },

        media(newValue, oldValue) {
            this.$emit("change", { key: "media", value: newValue });
        },

        jobTitles(newValue, oldValue) {
            this.$emit("change", { key: "jobTitles", value: newValue });
        },

        languages(newValue, oldValue) {
            this.$emit("change", { key: "languages", value: newValue });
        }
    }
};
</script>
