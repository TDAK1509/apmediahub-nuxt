<template>
    <div>
        <h4 class="subhead mb-2">{{$t('my_information.job_title')}}</h4>

        <v-checkbox
            v-for="j in journalistJobTitle"
            v-model="jobTitles"
            class="mt-3 pt-0"
            :key="j.value"
            :color="inputBorderColor"
            :label="j.text"
            :value="j.value"
            hide-details
        ></v-checkbox>
    </div>
</template>

<script>
import mixinJournalistJobTitleList from "~/mixins/journalist-job-title-list";

export default {
    name: "DashboardSearchFiltersJobTitles",

    mixins: [mixinJournalistJobTitleList],

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
