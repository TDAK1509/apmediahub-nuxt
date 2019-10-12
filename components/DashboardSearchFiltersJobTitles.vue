<template>
    <SearchUserSelectMultiple
        :items="journalistJobTitleList"
        :label="$t('my_information.job_title')"
        :value.sync="jobTitles"
    ></SearchUserSelectMultiple>
</template>

<script>
import mixinJournalistJobTitleList from "~/mixins/journalist-job-title-list";
import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";

export default {
    name: "DashboardSearchFiltersJobTitles",

    mixins: [mixinJournalistJobTitleList],

    components: {
        SearchUserSelectMultiple
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
