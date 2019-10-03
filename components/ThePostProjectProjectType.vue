<template>
    <div>
        <h4 class="subhead">{{ $t("project_type.project_type") }}</h4>

        <v-radio-group v-model="radio" column class="flex-grow-1 mt-2">
            <v-radio
                v-for="(user, i) in projectType"
                :key="i"
                :label="user.text"
                :value="user.value"
                :color="inputBorderColor"
            ></v-radio>
        </v-radio-group>

        <v-slide-y-transition>
            <v-text-field
                class="mt-0 pt-0"
                v-show="isOther"
                :label="$t('common.other_text')"
                @input="onInputOtherField"
            ></v-text-field>
        </v-slide-y-transition>
    </div>
</template>

<script>
export default {
    name: "TheProjectType",

    data() {
        return {
            radio: ""
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        oneTime() {
            return this.$t("project_type.one_time");
        },

        ongoing() {
            return this.$t("project_type.ongoing");
        },

        other() {
            return this.$t("common.other");
        },

        isOther() {
            return !["one-time", "ongoing"].includes(this.radio);
        },

        projectType() {
            return [
                { text: this.oneTime, value: "one-time" },
                { text: this.ongoing, value: "ongoing" },
                { text: this.other, value: "other" }
            ];
        }
    },

    watch: {
        radio(newValue, oldValue) {
            if (newValue != oldValue) {
                this.$emit("update:value", newValue);
            }
        }
    },

    methods: {
        onInputOtherField(value) {
            this.radio = value;
        }
    }
};
</script>

<style>
</style>