<template>
    <div>
        <h4 class="subhead mb-2">{{$t('common.language')}}</h4>

        <v-checkbox
            v-for="l in languageList"
            v-model="languages"
            class="mt-3 pt-0"
            :key="l"
            :color="inputBorderColor"
            :label="l"
            :value="l"
            hide-details
        ></v-checkbox>
    </div>
</template>

<script>
export default {
    name: "DashboardSearchFiltersLanguages",

    data() {
        return {
            languages: [],
            languageList: ["Vietnamese", "English", "Vietnamese/English"]
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    },

    watch: {
        languages(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
