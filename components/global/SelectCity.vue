<template>
    <v-select
        :items="cityList"
        :label="cityLabel"
        @change="onChange"
        outlined
        :rules="rules"
        :menu-props="{offsetY: true, transition: 'slide-y-transition'}"
    ></v-select>
</template>

<script>
import countryCityList from "@/assets/json/country_city_list.json";

export default {
    name: "SelectCity",
    props: {
        country: String,
        rules: Array
    },

    computed: {
        cityList() {
            if (!this.country) return [];
            return countryCityList[this.country].city.sort();
        },

        cityLabel() {
            return this.$t("common.city");
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