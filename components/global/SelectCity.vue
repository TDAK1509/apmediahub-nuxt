<template>
    <v-select
        :items="cityList"
        :label="cityLabel"
        @change="onChange"
        outlined
        :menu-props="{offsetY: true}"
    ></v-select>
</template>

<script>
import countryCityList from "@/assets/json/country_city_list.json";

export default {
    name: "SelectCity",
    props: {
        country: String
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
            this.$emit("change", value);
        }
    }
};
</script>

<style>
</style>