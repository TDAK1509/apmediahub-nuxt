<template>
    <v-select
        :items="jobType"
        :label="label"
        @change="onChange"
        outlined
        :menu-props="{offsetY: true}"
    ></v-select>
</template>

<script>
import jobTypeVN from "@/assets/json/job_type_vn.json";
import jobTypeEN from "@/assets/json/job_type_en.json";

export default {
    name: "SelectCountry",

    computed: {
        label() {
            return this.$t("post_job.job_type");
        },

        jobType() {
            const lang = this.$store.state.locale;

            if (lang === "vn") return jobTypeVN;
            else return jobTypeEN;
        }
    },

    methods: {
        onChange(value) {
            this.$emit("update:value", value);
        }
    }
};
</script>

<style>
</style>