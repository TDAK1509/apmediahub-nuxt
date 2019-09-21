<template>
    <v-select
        :items="countryList"
        :label="countryLabel"
        @change="onChange"
        outlined
        :menu-props="{offsetY: true}"
    ></v-select>
</template>

<script>
import countryCityList from "@/assets/json/country_city_list.json";

export default {
    name: "SelectCountry",

    computed: {
        countryList() {
            return Object.keys(countryCityList).sort();
        },

        countryLabel() {
            return this.$t("common.country");
        }
    },

    methods: {
        onChange(value) {
            this.$emit("change", value);
        }
    }
};
</script>

<style>
</style>