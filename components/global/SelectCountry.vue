<template>
    <v-select
        :items="countryList"
        :label="countryLabel"
        :color="inputBorderColor"
        @change="onChange"
        outlined
        :menu-props="{offsetY: true, transition: 'slide-y-transition'}"
        :rules="rules"
    ></v-select>
</template>

<script>
import countryCityList from "@/assets/json/country_city_list.json";

export default {
    name: "SelectCountry",

    props: {
        rules: Array
    },

    computed: {
        countryList() {
            return Object.keys(countryCityList).sort();
        },

        countryLabel() {
            return this.$t("common.country");
        },

        inputBorderColor() {
            return this.$store.state.inputBorderColor;
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