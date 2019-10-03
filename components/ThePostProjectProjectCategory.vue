<template>
    <SelectWithPanel :items="services" :label="label" @change="onChange" :rules="rules"></SelectWithPanel>
</template>

<script>
import serviceListVN from "@/assets/json/services_vn.json";
import serviceListEN from "@/assets/json/services_en.json";

export default {
    name: "ProjectCategory",

    props: {
        rules: Array
    },

    computed: {
        label() {
            return this.$t("post_project.project_category");
        },

        services() {
            const lang = this.$store.state.locale;

            if (lang === "vn") return serviceListVN;
            else return serviceListEN;
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