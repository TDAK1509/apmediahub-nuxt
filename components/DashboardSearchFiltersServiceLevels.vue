<template>
    <div>
        <h4 class="subhead mb-2">{{$t('service_level.service_level')}}</h4>

        <v-checkbox
            v-for="s in serviceLevelList"
            v-model="serviceLevels"
            class="mt-2 pt-0"
            :key="s.value"
            :color="inputBorderColor"
            :label="s.text"
            :value="s.value"
            hide-details
        ></v-checkbox>
    </div>
</template>

<script>
import mixinServiceLevelList from "~/mixins/service-level-list";

export default {
    name: "DashboardSearchFiltersServiceLevels",

    mixins: [mixinServiceLevelList],

    data() {
        return {
            serviceLevels: []
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    },

    watch: {
        serviceLevels(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
