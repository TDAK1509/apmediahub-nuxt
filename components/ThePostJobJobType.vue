<template>
    <v-select
        :items="jobType"
        :label="label"
        :color="inputBorderColor"
        @change="onChange"
        outlined
        :menu-props="{offsetY: true}"
    ></v-select>
</template>

<script>
export default {
    name: "SelectCountry",

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        label() {
            return this.$t("job_type.job_type");
        },

        jobType() {
            return [
                {
                    text: this.$t("job_type.all"),
                    value: "all"
                },

                {
                    text: this.$t("job_type.full-time"),
                    value: "full-time"
                },

                {
                    text: this.$t("job_type.part-time"),
                    value: "part-time"
                },

                {
                    text: this.$t("job_type.freelance"),
                    value: "freelance"
                },

                {
                    text: this.$t("job_type.internship"),
                    value: "internship"
                },

                {
                    text: this.$t("job_type.short-term"),
                    value: "short-term"
                }
            ];
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