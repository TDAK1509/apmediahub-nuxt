<template>
    <SearchSelectMultiple
        :items="journalistJobTitleList"
        :label="$t('my_information.job_title')"
        :value.sync="jobTitles"
    ></SearchSelectMultiple>
</template>

<script>
import mixinJournalistJobTitleList from "~/mixins/journalist-job-title-list";
import SearchSelectMultiple from "@/components/DashboardSearchSelectMultiple";

export default {
    name: "DashboardSearchFiltersJobTitles",

    mixins: [mixinJournalistJobTitleList],

    components: {
        SearchSelectMultiple
    },

    data() {
        return {
            jobTitles: []
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    },

    watch: {
        jobTitles(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
