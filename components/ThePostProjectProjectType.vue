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
                ref="otherField"
                class="mt-0 pt-0"
                v-show="isOther"
                :color="inputBorderColor"
                :label="$t('common.other_text')"
                :rules="otherFieldRules"
                @input="onInputOtherField"
            ></v-text-field>
        </v-slide-y-transition>
    </div>
</template>

<script>
import inputRules from "~/mixins/input-rules";

export default {
    name: "TheProjectType",

    mixins: [inputRules],

    data() {
        return {
            radio: "",
            selectedProjectType: ""
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
            return this.radio === "other";
        },

        projectType() {
            return [
                { text: this.oneTime, value: "one-time" },
                { text: this.ongoing, value: "ongoing" },
                { text: this.other, value: "other" }
            ];
        },

        otherFieldRules() {
            return !this.isOther ? [] : [this.inputRules.required];
        }
    },

    watch: {
        radio(newValue, oldValue) {
            this.selectedProjectType = newValue;
            this.focusOtherFieldOnShow();
        },

        selectedProjectType(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    },

    methods: {
        onInputOtherField(value) {
            this.selectedProjectType = value;
        },

        focusOtherFieldOnShow() {
            if (this.isOther) {
                this.$nextTick(this.$refs.otherField.focus);
            }
        }
    }
};
</script>

<style>
</style>