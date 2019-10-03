<template>
    <div>
        <h4 class="subhead">{{ $t("service_level.service_level") }}</h4>

        <v-radio-group v-model="radio" column class="flex-grow-1 mt-2 pt-0">
            <v-radio
                v-for="(user, i) in serviceLevel"
                :key="i"
                :label="user.text"
                :value="user.value"
                color="blue darken-3"
            ></v-radio>
        </v-radio-group>
    </div>
</template>

<script>
export default {
    name: "DashboardServiceLevel",

    data() {
        return {
            radio: ""
        };
    },

    computed: {
        basic() {
            return this.$t("service_level.basic");
        },

        intermediate() {
            return this.$t("service_level.intermediate");
        },

        expert() {
            return this.$t("service_level.expert");
        },

        serviceLevel() {
            return [
                { text: this.basic, value: "basic" },
                { text: this.intermediate, value: "intermediate" },
                { text: this.expert, value: "expert" }
            ];
        }
    },

    watch: {
        radio(newValue, oldValue) {
            if (newValue != oldValue) {
                this.$emit("update:value", newValue);
            }
        }
    }
};
</script>

<style>
</style>